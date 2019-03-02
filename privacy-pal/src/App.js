import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import SignUpForm from './SignUpForm';
import LoginPage from './LoginPage';
import Header from './Header';
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
          <NavBar />

          <main>
            <Route path="/home-page" component={MainBody}/>
            {/* <MainBody></MainBody> */}
            <Route path="/learning-page" component={LearningPage}/>
            {/* <LearningPage></LearningPage> */}
            <Redirect to="/home-page"/>
          </main>

          <Footer></Footer>
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

class NavBar extends Component {
  
  // Signs the user out of firebase
  handleSignOut = () => {
    this.setState({ errorMessage: null });

    firebase.auth().signOut()
      .catch((err) => {
        this.setState({ errorMessage: err.message })
      })
  }
  
  render() {
    return (
      <div className="header flex-container">
        <div className="flex-item">
          <div className="navLinks">
            <ul>
              <li>
                {/* <Header></Header> */}
                <img src="img/HeaderLogo.png" className="logo"></img>
              </li>
              <li className="nav-item">
                <NavLink to="/home-page" className="nav-link" activeClassName="selected" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/learning-page" className="nav-link" activeClassName="selected" >Learn</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="selected" activeStyle={{fontWeight: "bold", color:"green"}}>About</NavLink>
              </li> */}
              <li>
                <button className="btn btn-primary" onClick={this.handleSignOut}>Log Out</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-item">
          <div className="sign-in">
            <button className="btn btn-primary" onClick={this.handleSignOut}>Sign In</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
