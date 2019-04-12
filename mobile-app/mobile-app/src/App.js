import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div> 
      <Toolbar />
      <div className="cards-container">
      <DiscoverCard  imageName="one" title/>
      <DiscoverCard imageName="two"/>
      <DiscoverCard imageName="three"/>
      <DiscoverCard imageName="four"/>
      <DiscoverCard imageName="five"/>
      <DiscoverCard  imageName="one" />
      <DiscoverCard imageName="two"/>
      <DiscoverCard imageName="three"/>
      <DiscoverCard imageName="four"/>
      <DiscoverCard imageName="five"/>
      </div>

      <div className="triangle" />
      </div>
    );
  }
}



class DiscoverCard extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="card"  style={ {backgroundImage: "url(/img/discover-photos/"+ this.props.imageName + ".jpg)"}}>
      <h2> Title</h2>
      </div>
    )

  }


}

class Toolbar extends Component {

  render(){
    return(
    <div className="toolbar" >
    Discover
    </div>
    )
  }
}

export default App;
