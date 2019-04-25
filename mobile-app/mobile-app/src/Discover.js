import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

export class Discover extends Component {
    render() {
        return (
        <div className="cards-container">
      <DiscoverCard  imageName="one" title="Social Media" link='/CardOne' backColor='#FF847C'/>
      <DiscoverCard imageName="two" title="Internet Basics" backColor='#99B898'/>
      <DiscoverCard imageName="three" title="Games" backColor='#FECEA8'/>
      <DiscoverCard imageName="four" title="Location Services" backColor='#E84A5F'/>
      <DiscoverCard imageName="five" title="Online Identity" backColor='#2A363B'/>
      <DiscoverCard imageName="one" title="Social Media" backColor='#FF847C'/>
      <DiscoverCard imageName="two" title="Internet Basics" backColor='#99B898'/>
      <DiscoverCard imageName="three" title="Games" backColor='#FECEA8'/>
      <DiscoverCard imageName="four" title="Location Services" backColor='#E84A5F'/>
      <DiscoverCard imageName="five" title="Online Identity" backColor='#2A363B'/>
      </div>
        )
    }
}

class DiscoverCard extends Component {

  constructor(props){
    super(props);
    this.state = {clicked: false
    }
  }

  handleClick = () => {
    this.setState({ clicked: true })
  }

  render(){
    console.log(this.props.link);
    if (this.state.clicked) {
      return (
          <Redirect push to={this.props.link}/>
      )
  }
    return(
        //style={ {backgroundImage: "url(/img/discover-photos/"+ this.props.imageName + ".jpg)"}}
      <div className="card"  onClick={this.handleClick} style={ {backgroundColor: this.props.backColor }}>
      <h2><Link to={this.props.link}>{this.props.title}</Link></h2>
      </div>
    )

  }


}


