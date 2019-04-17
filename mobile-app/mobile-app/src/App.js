import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Discover } from './Discover';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { CardOne } from './CardOne';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div> 
        <Router>
          <Switch>
            <Route exact path='/' render={(routeProps) => (
              <div>
              <Toolbar />
              <Discover />
              </div>
              )} />
              <Route exact path='/CardOne' render={(routeProps) => (
              <CardOne />
              )} />
      
         </Switch>
      </Router>
      {/* <div className="triangle" /> */}
      </div>
    );
  }
}



export class DiscoverCard extends Component {

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
        
      <div className="card"  style={ {backgroundImage: "url(/img/discover-photos/"+ this.props.imageName + ".jpg)"}} onClick={this.handleClick}>
      <h2>{this.props.title}</h2>
      <Link to='/CardOne'></Link>
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
