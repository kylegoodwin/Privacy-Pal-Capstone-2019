import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

import firebase from 'firebase/app';

import './.scss/Header.scss';

const Navigation = ({ user }) => (
  <div>{user ? <HeaderSignedIn user={user}/> : <HeaderSignedOut />}</div>
);

class HeaderSignedIn extends Component {

  constructor(props) {
    super(props);
  }

  handleSignOut = () => {
    this.setState({errorMessage:null});

    firebase.auth().signOut()
        .catch((err) => {
            this.setState({errorMessage: err.message})
        })
  }

  render() {
    return (
      <div className="navbar-wrapper">
      <div className="header flex-container">
        <div className="flex-item">
          <div className="navLinks">
            <ul>
              <li>
                <Link to="/home-page">
                  <img src="img/HeaderLogo.png" className="logo"></img>
                </Link>
              </li>
              <li className="nav-item">
                <NavLink to="/home-page" className="nav-link" activeClassName="selected">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/learning-page" className="nav-link" activeClassName="selected">Learn</NavLink>
              </li>
              <li className="nav-item">
                <p className="header-greeting">Hello, {this.props.user.displayName}!</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-item">
          <button type="button" className="btn btn-outline-danger sign-out-button" onClick={this.handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      </div>
    );
  }
}

class HeaderSignedOut extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-wrapper">
      <div className="header flex-container">
        <div className="flex-item">
          <div className="navLinks">
            <ul>
              <li>
                <Link to="/home-page">
                  <img src="img/HeaderLogo.png" className="logo"></img>
                </Link>
              </li>
              <li className="nav-item">
                <NavLink to="/home-page" className="nav-link" activeClassName="selected">Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-item">
          <NavLink to="/sign-in" className="nav-link">
            <button type="button" className="btn btn-outline-danger sign-in-button">Sign in</button>
          </NavLink>
        </div>
      </div>
      </div>
    );
  }
}


export default Navigation;
