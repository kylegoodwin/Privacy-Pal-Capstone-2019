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
        <img src="img/HeaderLogo.png" className="logo"></img>
        {/* PRIVACY EDUCATION PLATFORM SECTION */}
        <div className="row d-flex align-items-center text-left sweg">
          <div className="col-sm-4">
            <div className="card border-0">
              <div className="card-body">
                <h1 className="card-title text-light">Privacy Education Platform</h1>
                <NavLink to="/sign-up" className="nav-link">
                  {/* <button type="button" className="btn btn-outline-warning justify-content-center: super">Protect Your Privacy Now - Sign Up</button> */}
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
        <div className="platform">
          <img id="streamline" src="/img/platform.png"/>
        </div>
        {/* LESSONS */}
        <div className="lessons">
          <div>
            <h1 className="pt-5" id="icons-heading">  Lessons on Social Media: </h1>
          </div>
          <div className="row">
            <div className="col md-5 pic">
              <img className="screen-shots" src="img/posting-moderation.png"></img>
              <div>
                <p className="icon-caption text-center font-weight-bold">Posting in Moderation</p>
              </div>
            </div>
            <div className="col md-5 pic">
              <img className="screen-shots" src="img/online-networking.png"></img>
              <div>
                <p className="icon-caption text-center font-weight-bold">Online Friends And Your Network</p>
              </div>
            </div>
            <div className="col md-5 pic">
              <img className="screen-shots" src="img/identity.png"></img>
              <div>
                <p className="icon-caption text-center font-weight-bold">Online Identity</p>
              </div>
            </div>
          </div>
        </div>


        <div className="examples">
          <div>
            <h1 className="pt-5" id="icons-heading">  Learning from Examples: </h1>
          </div>
          <div className="row">
            {/* <section className="icons" align="center">  */}
            <div className="col-md-4 pic">
              <img className="screen-shots pl-5" src="img/story2.png"></img>
              <div>
                <p className="icon-caption text-center font-weight-bold">Sensitive Topic Posting</p>
              </div>
            </div>
            <div className="col-md-4 pic">
              <img className="screen-shots pl-5" src="img/story1.png"></img>
              <div>
                <p className="icon-caption text-center font-weight-bold">Unknown Networks</p>
              </div>
            </div>
            {/* </section> */}
          </div>
        </div>

        {/* PARALLAX PICTURE SECTION*/}
        <div id="bigImage">
          <div className="text-center">
            <h1 id="who-we-are" className="display-1">Our Mission</h1>
            <p className="image-text display-4">Teach</p>
            <p className="image-text display-4">Protect</p>
            <p className="image-text display-4">Inspire</p>
          </div>
        </div>
        {/* MODULES SECTION */}
        <p id="about">
          <div className="inner">
            <h1 className="ml-4 mb-5 display-2"> About the Project </h1>
            <p className="ml-5 mr-5">Privacy Pal is a Capstone project through the University of Washington's Informatics program. The team consists of Kyle Goodwin, Lucas Woo,
              Ryan Peart, and Sam Yoshikawa. Privacy Pal's goal is to inform and educate the next generation on user data, internet privacy, and how to be more
              cognizant about their online presence. Our online app is designed for use on smart phones and combines the designs of popular apps in the younger
              age groups with educational content and quizzes. We hope to break through to the Middle Schoolers and support them through their digital adventures.
          </p>
          </div>
        </p>
        {/* SIGN UP SECTION */}
        {/* <section className="signUp" align="center">
        <h1> Sign Up Now To Protect Your Online Identity </h1>
        <NavLink to="/sign-up" className="nav-link">
          <button className="btn btn-outline-warning justify-content-center: super">Sign Up Now</button>
        </NavLink>
      </section> */}
      </div>
    );
  }
}

export default LandingPage;
