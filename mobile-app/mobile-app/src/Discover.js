import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

export class Discover extends Component {
    render() {
        return (
        <div className="cards-container">
      <DiscoverCard  imageName="one" title="Social Media" linkither='/CardOne'/>
      <DiscoverCard imageName="two" title="Internet Basics" />
      <DiscoverCard imageName="three" title="Games"/>
      <DiscoverCard imageName="four" title="Location Services"/>
      <DiscoverCard imageName="five" title="Online Identity"/>
      <DiscoverCard imageName="one" title="Social Media"/>
      <DiscoverCard imageName="two" title="Internet Basics"/>
      <DiscoverCard imageName="three" title="Games"/>
      <DiscoverCard imageName="four" title="Location Services"/>
      <DiscoverCard imageName="five" title="Online Identity"/>
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
    if (this.state.clicked) {
      return (
          <Redirect push to={this.props.linkither}/>
      )
  }
    return(
        
      <div className="card"  onClick={this.handleClick} style={ {backgroundImage: "url(/img/discover-photos/"+ this.props.imageName + ".jpg)"}}>
      
      <h2><Link to='/CardOne'>{this.props.title}</Link></h2>
    
      <Link className="blur" style={ {backgroundImage: "url(/img/discover-photos/"+ this.props.imageName + ".jpg)"}} to='/CardOne'></Link>
      </div>
    )

  }


}


