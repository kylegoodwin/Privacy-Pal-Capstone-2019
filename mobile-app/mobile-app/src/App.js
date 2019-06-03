import React, { Component } from 'react';
import './App.css';
import { Discover } from './Discover';
import {Landing} from './landing/Landing';
import { HashRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import { StoryRouter } from './learn/StoryRouter';
import {DiscussRouter } from './discuss/DiscussRouter';
import {FinalPage} from './final';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
          <Route exact path='/landing' render={(routeProps) => (
              <Landing></Landing>
            )} />
            <Route exact path='/' render={(routeProps) => (
              <Discover></Discover>
            )} />
            <Route exact path='/Discover' render={(routerProps) => (
              <Discover />
            )} />
            <Route  path='/modules/:name' render={(routeProps) => (
              <StoryRouter></StoryRouter>
            )} />
            <Route exact path='/response/:name' render={(routeProps) => (
              <DiscussRouter />
            )} />
            <Route exact path='/finished' render={(routeProps) => (
              <FinalPage />
            )} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
