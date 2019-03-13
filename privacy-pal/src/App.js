import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import Header from './Header';
import SignUpForm from './SignUpForm';
import LoginPage from './LoginPage';
import MainBody from './LandingPage';
import LearningPage from './LearningPage'
import Footer from './Footer';
import firebase from 'firebase/app';
import './App.scss';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: '',
  //   }
  // }

  render() {
    return (
      <div>
        <BrowserRouter>

          <div className="App">
            <main>
              <Header></Header>
              <Route path="/home-page" component={MainBody} />
              <Route path="/learning-page" component={LearningPage} />
              <Route path="/sign-in" component={LoginPage} />

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
