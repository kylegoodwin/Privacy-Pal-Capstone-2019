import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Discover } from './Discover';
import { HashRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import { StoryRouter } from './StoryRouter';
import { Landing } from './Landing';
import { Landing2 } from './Landing2';
import {Quiz} from './Quiz';
import {Discuss} from './Discuss';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' render={(routeProps) => (
              <Discover></Discover>
            )} />
            <Route exact path='/Landing2' render={(routeProps) => (
              <Landing2 />
            )} />
            <Route exact path='/Discover' render={(routerProps) => (
              <Discover />
            )} />
            <Route  path='/modules/:name' render={(routeProps) => (
              <StoryRouter></StoryRouter>
            )} />
            <Route exact path='/Quiz/1' render={(routeProps) => (
              <Discuss />
            )} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
