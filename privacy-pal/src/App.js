import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import LandingPage from './LandingPage';
import LearningPage from './LearningPage';
import Footer from './Footer';
import firebase from 'firebase/app';
import './.scss/App.scss';



class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>

          <div className="App">
            <main>
              <Header></Header>
              <Route path="/home-page" component={LandingPage} />
              <Route path="/learning-page" component={LearningPage} />
              <Route path="/sign-in" component={SignInPage} />
              <Route path="/sign-up" component={SignUpPage} />

              {/* <Redirect to="/home-page"/> */}
            </main>


          </div>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
