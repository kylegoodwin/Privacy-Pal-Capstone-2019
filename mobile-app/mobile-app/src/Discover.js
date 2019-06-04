import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

export class Discover extends Component {

  constructor(props){
    super(props);

    this.state = {
      cheat: false
    }
  }

  getUrlVars = () => {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }

  resetFunction = () => {
    window.location.assign("/#/reset");
  }

  cheatFunction = () => {
    this.setState({cheat: true});
  }

  render = () => {

    let check = this.getUrlVars();
    check = check["reset"];

    if(check === "true"){
      this.resetLocalStorage();
    }

    return (
      <div className="discover-body">
        <Toolbar />
        <p>👆🏼Tap on a story below to learn more about your digital privacy </p>
        <LearnCards />
        <h1>Quiz Time!</h1>
        <p> Finish the story above first! Then ➡️</p>
        <p>👆🏼 Tap on a module to test your knowlege, and discuss what you have learned. Complete them all to earn your badge!</p>
        <QuizCards cheat={this.state.cheat} ></QuizCards>
        <div onClick={this.resetFunction} className="discuss-button">Reset (Demo)</div>
        <div onClick={this.cheatFunction} className="discuss-button">Cheat (Demo)</div>
      </div>
    )
  }
}

class LearnCards extends Component {

  render() {
    return (
      <div className="cards-container">
        <DiscoverCard imageName="one" emoji="👀" title="Intro" link='/modules/intro' backColor='#FF847C' />
        <DiscoverCard imageName="two" emoji="🛑" title="Dont post too much!" link='/modules/moderation' backColor='#99B898' />
        <DiscoverCard imageName="three" emoji="👫" title="Online Friends" link='/modules/friends' backColor='#2A363B' />
        <DiscoverCard imageName="four" emoji="🤷🏽‍" title="Who are you online?" link='/modules/identity' backColor='#E84A5F' />
      </div>

    )


  }
}

class QuizCards extends Component {

  render() {
    let finalBool = (localStorage.getItem("quiz identity") && localStorage.getItem("quiz moderation") && localStorage.getItem("quiz friends")) || this.props.cheat;
    return (

      <div className="cards-container">
        <DiscoverCard title="Moderation" emoji="🛑" link='/response/moderation' backColor='#99B898' isLocked={!(localStorage.getItem("intro") === "true")} />
        <DiscoverCard title="Friends" emoji="👫" link='/response/friends' backColor='#2A363B' isLocked={!(localStorage.getItem("moderation") === "true")} />
        <DiscoverCard title="Identity" emoji="🤷🏽‍" link='/response/identity' backColor='#E84A5F' isLocked={!(localStorage.getItem("friends") === "true")} />
        <DiscoverCard emoji="🏁" title="When you finish all 3 tap here!" link='/finished' backColor='#99B898' isFinal={true} isUnlocked={finalBool}/>
      </div>

    )


  }
}

class DiscoverCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({ clicked: true })
  }


  render() {

    if ((!this.props.isFinal && this.state.clicked && !this.props.isLocked) || this.props.isUnlocked && this.state.clicked) {
      return (
        <Redirect push to={this.props.link} />
      )
    }

    return (
      //style={ {backgroundImage: "url(/img/discover-photos/"+ this.props.imageName + ".jpg)"}}
      <div className="card" onClick={this.handleClick} style={{ backgroundColor: this.props.backColor }}>


    {this.props.isFinal &&           <div>
            <h2>{this.props.title}</h2>
            <div className="emoji">{this.props.emoji}</div>
          </div> }
          
            

         {(this.props.isLocked) ? <img id="discover-lock" src="img/lock.png"></img> :
         
         !this.props.isFinal && <div>
            <h2><Link to={this.props.link}>{this.props.title}</Link></h2>
            <div className="emoji"><Link to={this.props.link}> {this.props.emoji}</Link></div>
          </div>
        }
      </div>
    )
  }
}

class Toolbar extends Component {
  //<img id="toolbar-icon" src="img/Tab-Icon.png" />
  render() {
    return (
      <div className="toolbar">
        <h1>Learn</h1>
      </div>
    )
  }
}


