import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

export class Discover extends Component {
  render() {
    return (
      <div className="discover-body">
        <Toolbar />
        <p>👆🏼Tap on a story below to learn more about your digital privacy </p>
        <LearnCards />
        <h1>Discuss</h1>
        <p>👆🏼 Tap on a module to test your knowlege, and discuss what you have learned. Complete them all to earn your badge!</p>
        <QuizCards ></QuizCards>
      </div>
    )
  }
}

class LearnCards extends Component {

  render() {
    return (
      <div className="cards-container">
        <DiscoverCard imageName="one" emoji="👀" title="Intro" link='/modules/identity' backColor='#FF847C' />
        <DiscoverCard imageName="two" emoji="🛑" title="Dont post too much!" link='/modules/moderation' backColor='#99B898'  />
        <DiscoverCard imageName="three" emoji="👺" title="Bullies" link='/modules/cyberbullying' backColor='#2A363B' />
        <DiscoverCard imageName="four" emoji="⚔️" title="Protect your profile" link='/modules/who' backColor='#E84A5F' />
      </div>

    )


  }
}

class QuizCards extends Component {

  render() {
    return (

      <div className="cards-container">
        <DiscoverCard imageName="one" title="Social Media" link='/response/socialmedia' backColor='#FF847C' />
        <DiscoverCard imageName="two" title="Internet Basics" link='/response/network' backColor='#99B898' />
        <DiscoverCard imageName="three" title="Internet Economy" link='/response/privacy' backColor='#2A363B' />
        <DiscoverCard imageName="four" title="Location Services" link='/response/privacy' backColor='#E84A5F' />
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


