import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import SignUpForm from './SignUpForm';
import LoginPage from './LoginPage';
import MainBody from './LandingBody';
import LearningPage from './LearningPage'
import Footer from './Footer';
import firebase from 'firebase/app'

class App extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: '',
  //   }
  // }

  render() {
    return(
      <div>
        <BrowserRouter>
        <div className="App">

          <main>
            <Route path="/home-page" component={MainBody}/>
            <Route path="/learning-page" component={LearningPage}/>
            <Route path="/sign-in" component={LoginPage}/>

            <Redirect to="/home-page"/>
          </main>

          <Footer></Footer>
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
