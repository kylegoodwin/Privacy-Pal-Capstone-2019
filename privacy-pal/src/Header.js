import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Link, NavLink} from 'react-router-dom';
import firebase from 'firebase/app'


class Header extends Component {
  
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
            <NavLink to="/sign-in" className="nav-link">Sign In</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Header;
  