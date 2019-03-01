import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Header from './Header';
import MainBody from './LandingBody';
import LearningPage from './LearningPage'
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        
      <NavBar />

      <main>
        <BrowserRouter>
          <Route path="/home-page" component={MainBody}/>
          {/* <MainBody></MainBody> */}
          <Route path="/learning-page" component={LearningPage}/>
          {/* <LearningPage></LearningPage> */}
          <Redirect to="/home-page"/>
        </BrowserRouter>
      </main>

      <Footer></Footer>
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <div className="navbar fixed-top">
        <a>
          {/* <Header></Header> */}
          <img src="img/HeaderLogo.png" className="logo"></img>
        </a>
        <div className="navLinks">
          <ul>
            <li className="nav-item">
              <NavLink to="/home-page" className="nav-link" activeClassName="selected" activeStyle={{fontWeight: "bold", color:"green"}}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/learning-page" className="nav-link" activeClassName="selected" activeStyle={{fontWeight: "bold", color:"green"}}>Learn</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="selected" activeStyle={{fontWeight: "bold", color:"green"}}>About</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
