import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

export class Discover extends Component {
    render() {
        return (
        <div className="cards-container">
      <DiscoverCard  imageName="one" title="Social Media" linkither='/CardOne' backColor='#FF847C'/>
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
    if (this.state.clicked) {
      return (
          <Redirect push to={this.props.linkither}/>
      )
  }
    return(
        //style={ {backgroundImage: "url(/img/discover-photos/"+ this.props.imageName + ".jpg)"}}
      <div className="card"  onClick={this.handleClick} style={ {backgroundColor: this.props.backColor }}>
      
      <div>
      <h3 className="text-center"><Link to='/CardOne'>{this.props.title}</Link></h3>
      </div>
      {/* <Link className="blur" to='/CardOne'></Link> */}
      </div>
    )

  }


}


