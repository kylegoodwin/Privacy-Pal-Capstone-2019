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
        <div className="row d-flex align-items-center text-left sweg">
          <div className="col-sm-4">
            <div className="card border-0">
              <div className="card-body">
                <h1 className="card-title text-light display-4">Privacy Education Platform</h1>
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
      {/* EDUCATING THE NEXT GENERATION SECTION */}
      <div>
        <h1 className="pt-5" id="icons-heading"> Learning Module Topics: </h1>
      </div>
      <div className = "row">
        {/* <section className="icons" align="center">  */}
            <div className="column">
              <img className="screen-shots pl-5" src="img/posting-moderation.png"></img>
              <div>
                <p className="icon-caption text-center font-weight-bold">Posting in Moderation</p>
              </div>
            </div>
            <div id="2" className="column">
              <img className="screen-shots" src="img/online-networking.png"></img>
              <div>
                <p className="icon-caption text-center pr-5 font-weight-bold">Online Friends And Your Network</p>
              </div>
            </div>
            <div id="3" className="column">
              <img className="screen-shots pr-4" src="img/economics.png"></img>
              <div>
                <p className="icon-caption text-center pr-5 font-weight-bold">Economics of Social Media Platforms</p>
              </div>
            </div>
      {/* </section> */}
     </div>
     {/* PARALLAX PICTURE SECTION*/}
      <div id="bigImage">
        <div className="text-center">
        <h1 id="who-we-are">Our Mission</h1>
        <p className="image-text">Teach</p>
        <p className="image-text">Protect</p>
        <p className="image-text">Inspire</p>
        </div>
      </div>
      {/* MODULES SECTION */}
      <section className="modules-display">
        <h1 className="ml-5 text-light"> About the Project </h1>
        <div className="ml-5 mr-5 text-light">Privacy Pal is a Capstone project through the University of Washington's Informatics program. The team consists of Kyle Goodwin, Lucas Woo,
          Ryan Peart, and Sam Yoshikawa. Privacy Pal's goal is to inform and educate the next generation on user data, internet privacy, and how to be more 
          cognizant about their online presence. Our online app is designed for use on smart phones and combines the designs of popular apps in the younger 
          age groups with educational content and quizzes. We hope to break through to the Middle Schoolers and support them through their digital adventures. 
        </div>
      </section>
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
