import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Discover } from './Discover';
import { HashRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import { StoryRouter } from './learn/StoryRouter';
import {DiscussRouter } from './discuss/DiscussRouter';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' render={(routeProps) => (
              <Discover></Discover>
            )} />
            <Route exact path='/Discover' render={(routerProps) => (
              <Discover />
            )} />
            <Route  path='/modules/:name' render={(routeProps) => (
              <StoryRouter></StoryRouter>
            )} />
            <Route exact path='/response/:number' render={(routeProps) => (
              <DiscussRouter />
            )} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
