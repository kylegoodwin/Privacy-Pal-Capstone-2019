import React, { Component } from 'react';
import './App.css';
import { Discover } from './Discover';
import { Landing } from './landing/Landing';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { StoryRouter } from './learn/StoryRouter';
import { DiscussRouter } from './discuss/DiscussRouter';
import { FinalPage } from './final';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      update: false
    }
  }

  updatePage = (shouldShowLanding) => {
    this.setState({update: shouldShowLanding});
  }

  showLanding = () => {
    this.updatePage(false);
  }

  dontShowLanding = () =>{
    this.updatePage(true);
  }

  render() {

    let hasDoneIntro = localStorage.getItem("app-intro");

    const routes = (
      <Router>
        <Switch>
          <Route exact path='/' render={(routeProps) => (
            <Discover></Discover>
          )} />
          <Route exact path='/landing' render={(routeProps) => (
            <Discover></Discover>
          )} />
          <Route exact path='/Discover' render={(routerProps) => (
            <Discover />
          )} />
          <Route path='/modules/:name' render={(routeProps) => (
            <StoryRouter></StoryRouter>
          )} />
          <Route exact path='/response/:name' render={(routeProps) => (
            <DiscussRouter />
          )} />
          <Route exact path='/finished' render={(routeProps) => (
            <FinalPage />
          )} />
          <Route exact path='/reset' render={(routeProps) => (
            <ResetPage showLanding={this.showLanding} />
          )} />
        </Switch>
      </Router>
    );

    return (
      <div>
        {hasDoneIntro || this.state.update ? routes : <Landing updatePage={this.dontShowLanding}></Landing>}
      </div>
    );
  }
}

class ResetPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  resetLocalStorage = () => {
    localStorage.clear();
    //window.location.reload();
    this.setState({ clicked: true })
    window.location.assign("/");
  }

  render() {
    return (
      <div>
        <div onClick={this.resetLocalStorage} className="discuss-button">Continue</div>
      </div>

    )
  }
}

export default App;
