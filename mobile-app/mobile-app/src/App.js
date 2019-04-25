import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Discover } from './Discover';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CardOne } from './CardOne';
import {Landing} from './Landing';
import {Landing2} from './Landing2';
class App extends Component {
  render() {
    return (
      <div> 
        <Router>
          <Switch>
            <Route exact path='/' render={(routeProps) => (
                <Landing />
              )} />
              <Route exact path='/Landing2' render={(routeProps) => (
                <Landing2 />
              )} />
              <Route exact path='/Discover' render={(routerProps) => (
                <div>
                  <Toolbar />
                  <Discover />
                </div>
              )}/>
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


class Toolbar extends Component {

  render(){
    return(
    <div className="toolbar">
    <div className="gradient-menu"></div>
    Discover
    </div>
    )
  }
}

export default App;
