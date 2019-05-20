import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

export class Discover extends Component {

  resetLocalStorage = () =>{
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <div className="discover-body">
        <Toolbar />
        <p>👆🏼Tap on a story below to learn more about your digital privacy </p>
        <LearnCards />
        <h1>Quiz Time!</h1>
        <p> Finish the story above first! Then ➡️</p>
        <p>👆🏼 Tap on a module to test your knowlege, and discuss what you have learned. Complete them all to earn your badge!</p>
        <QuizCards ></QuizCards>
        <button id="reset" onClick={this.resetLocalStorage}> Reset</button>
      </div>
    )
  }
}

class LearnCards extends Component {

  render() {
    return (
      <div className="cards-container">
        <DiscoverCard imageName="one" emoji="👀" title="Intro" link='/modules/intro' backColor='#FF847C' />
        <DiscoverCard imageName="two" emoji="🛑" title="Dont post too much!" link='/modules/moderation' backColor='#99B898'  />
        <DiscoverCard imageName="three" emoji="👫" title="Online Friends" link='/modules/friends' backColor='#2A363B' />
        <DiscoverCard imageName="four" emoji="🤷🏽‍" title="Who are you online?" link='/modules/identity' backColor='#E84A5F' />
      </div>

    )


  }
}

class QuizCards extends Component {

  render() {

    return (

      <div className="cards-container">
        <DiscoverCard  title="Moderation" link='/response/moderation' backColor='#99B898' isLocked={!(localStorage.getItem("intro") === "true")}/>
        <DiscoverCard  title="Friends" link='/response/friends' backColor='#2A363B' isLocked={!(localStorage.getItem("moderation") === "true")} />
        <DiscoverCard  title="Identity" link='/response/identity' backColor='#E84A5F' isLocked={!(localStorage.getItem("friends") === "true")} />
        <DiscoverCard  emoji="🏁" title="Finish!" link='/response/identity' backColor='#99B898' isLocked={!(localStorage.getItem("identity") === "true") || !(localStorage.getItem("intro") === "true") || !(localStorage.getItem("moderation") === "true") || !(localStorage.getItem("friends") === "true")} />
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

    if (this.state.clicked && !this.props.isLocked) {
      return (
        <Redirect push to={this.props.link} />
      )
    }
    return (
      //style={ {backgroundImage: "url(/img/discover-photos/"+ this.props.imageName + ".jpg)"}}
      <div className="card" onClick={this.handleClick} style={{ backgroundColor: this.props.backColor }}>

      {this.props.isLocked ? <img id="discover-lock" src="img/lock.png"></img> : 
      <div>
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


