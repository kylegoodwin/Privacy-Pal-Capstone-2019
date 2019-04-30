import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

export class Discover extends Component {
  render() {
    return (
      <div className="discover-body">
      <Toolbar />
        <p> Tap on a story below to learn more about your digital privacy </p>
        <div className="cards-container">
          <DiscoverCard imageName="one" title="Social Media" link='/CardOne' backColor='#FF847C' />
          <DiscoverCard imageName="two" title="Internet Basics" link='/CardOne' backColor='#99B898' />
          <DiscoverCard imageName="three" title="Internet Economy" link='/CardOne' backColor='#2A363B' />
          <DiscoverCard imageName="four" title="Location Services" link='/CardOne' backColor='#E84A5F' />
        </div>
        <p>More coming soon! 😊</p>
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
    console.log(this.props.link);
    if (this.state.clicked) {
      return (
        <Redirect push to={this.props.link} />
      )
    }
    return (
      //style={ {backgroundImage: "url(/img/discover-photos/"+ this.props.imageName + ".jpg)"}}
      <div className="card" onClick={this.handleClick} style={{ backgroundColor: this.props.backColor }}>
        <h2><Link to={this.props.link}>{this.props.title}</Link></h2>
      </div>
    )

  }


}

class Toolbar extends Component {

  render(){
    return(
    <div className="toolbar">
    <img id="toolbar-icon" src="img/Tab-Icon.png" />
    <h1>Learn</h1>
    </div>
    )
  }
}


