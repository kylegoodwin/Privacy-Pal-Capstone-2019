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
    );
  }
}

class NavBar extends Component {
  render() {
    return (
        <div className="navLinks">
          <ul>
          <li>
          {/* <Header></Header> */}
          <img src="img/HeaderLogo.png" className="logo"></img>
        </li>
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
    );
  }
}

export default App;
