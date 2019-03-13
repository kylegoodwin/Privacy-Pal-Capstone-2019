import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import firebase from 'firebase/app'
import './Header.scss';

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
      <div className="navbar-wrapper">
      <div className="header flex-container">
        <div className="flex-item">
          <div className="navLinks">
            <ul>
              <li>
                {/* <Header></Header> */}
                <Link to="/home-page">
                  <img src="img/HeaderLogo.png" className="logo"></img>
                </Link>
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
            </ul>
          </div>
        </div>
        <div className="flex-item">
          <NavLink to="/sign-in" className="nav-link">
            <button type="button" className="btn btn-outline-danger justify-content-center: super">Sign in</button>
          </NavLink>
        </div>
      </div>
      </div>
    );
  }
}

export default Header;
