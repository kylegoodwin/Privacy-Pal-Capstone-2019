import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import firebase from 'firebase/app'
import { NavLink } from 'react-router-dom';
import './LandingPage.scss';

class MainBody extends Component {
  render() {
    return (
      <div>
        <div className="row d-flex align-items-center text-left">
          <div className="col-sm-4">
            <div className="card border-0">
              <div className="card-body">
                <h1 className="card-title">Privacy Education Platform</h1>
                <NavLink to="/sign-in" className="nav-link">
                  <button type="button" className="btn btn-outline-danger justify-content-center: super">Protect Your Privacy Now</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="card border-0">
              <div className="card-body">
                <img className="header-image float-right" src="img/kids1.jpg" alt="student computer lab image"></img>
              </div>
            </div>
          </div>
        </div>
      <section className="icons" align="center"> 
        <h2 id="icons-heading"> Educating The Next Generation: </h2>
        <ul className="iconCaptions">
          <li>
            <img src="img/capstoneBook.svg"></img>
            <div>
              <p className="icon-caption">How your personal information is created and recorded</p>
            </div>
          </li>
          <li>
            <img src="img/capstoneCookie.svg"></img>
            <div>
              <p className="icon-caption">The importance of cookie tracking, and the information they can hold</p>
            </div>
          </li>
          <li>
            <img src="img/capstoneCert.svg"></img>
            <div>
              <p className="icon-caption">The laws and documentation that go into online privacy</p>
            </div>
          </li>
        </ul>
        {/* Icon Source */}
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/trinh-ho" title="Trinh Ho">Trinh Ho</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
      </section>
      <div id="bigImage">
        <div className="text-center">
        <h2 id="who-we-are">Our Mission</h2>
        <p className="image-text">Teach</p>
        <p className="image-text">Protect</p>
        <p className="image-text">Inspire</p>
        </div>
      </div>
      <section className="modulesDisplay">
        <h1 align="center"> Modules taught: </h1>
        <img src="img/screenshot.png"></img>
        {/* <div className="screenshot"></div> */}
      </section>
      <section className="signUp" align="center">
        <h1> Sign Up Now To Protect Your Online Identity </h1>
        <button>Sign Up</button>
      </section>
      </div>
    );
  }
}

export default MainBody;
