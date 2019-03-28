import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import Header from './Header'
import Slider from './ModulesDisplay';

import firebase from 'firebase/app'

import './.scss/LandingPage.scss';


class LandingPage extends Component {
  render() {
    return (
      <div>
        {/* PRIVACY EDUCATION PLATFORM SECTION */}
        <div className="row d-flex align-items-center text-left">
          <div className="col-sm-4">
            <div className="card border-0">
              <div className="card-body">
                <h1 className="card-title">Privacy Education Platform</h1>
                <NavLink to="/sign-up" className="nav-link">
                  <button type="button" className="btn btn-outline-warning justify-content-center: super">Protect Your Privacy Now - Sign Up</button>
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
      {/* EDUCATING THE NEXT GENERATION SECTION */}
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
     </section>
     {/* PARALLAX PICTURE SECTION*/}
      <div id="bigImage">
        <div className="text-center">
        <h2 id="who-we-are">Our Mission</h2>
        <p className="image-text">Teach</p>
        <p className="image-text">Protect</p>
        <p className="image-text">Inspire</p>
        </div>
      </div>
      {/* MODULES SECTION */}
      <section className="modules-display">
        <h1 align="center"> Modules taught: </h1>
        <Slider />
      </section>
      {/* SIGN UP SECTION */}
      <section className="signUp" align="center">
        <h1> Sign Up Now To Protect Your Online Identity </h1>
        <NavLink to="/sign-up" className="nav-link">
          <button className="btn btn-outline-warning justify-content-center: super">Sign Up Now</button>
        </NavLink>
      </section>
      </div>
    );
  }
}

export default LandingPage;
