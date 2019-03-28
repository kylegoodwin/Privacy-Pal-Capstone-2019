import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Navigation from './Header';
import SignInPage from './Firebase/SignInPage';
import SignUpPage from './Firebase/SignUpPage';
import LandingPage from './LandingPage';
import LearningPage from './LearningPage';
import Footer from './Footer';

import firebase from 'firebase/app';
// import { withFirebase } from './Firebase/Firebase'

import './.scss/App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.authUnSubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      firebaseUser ? this.setState({ user : firebaseUser }) : this.setState({ user: null });
    })
  }

  componentWillUnmount() {
    this.authUnSubFunction();
  }

  render() {
    return (
      <div>
        <BrowserRouter>

          <div className="App">
            <main>
              <Navigation user={this.state.user}></Navigation>

              <Route path="/home-page" component={LandingPage} />
              <Route path="/learning-page" component={LearningPage} />
              <Route path="/sign-in" component={SignInPage} />
              <Route path="/sign-up" component={SignUpPage} />

              {/* <Redirect to="/home-page"/> */}
            </main>

          </div>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

// export default withFirebase(App);
export default App;
