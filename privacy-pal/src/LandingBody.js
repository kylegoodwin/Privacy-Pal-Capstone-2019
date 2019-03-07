import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import firebase from 'firebase/app'


class MainBody extends Component {
  render() {
    return (
      <div>
        <section className="bigimage">
          <div class="text-container">
            <h1> What are you doing to protect your kids online? </h1>
          </div>
        </section>
        <section className="icons" align="center"> 
          <h1> Of the many features, you will learn: </h1>
          <ul className="iconCaptions">
            <li>
              <img src="img/book.png"></img>
              <div>
                <p>How your personal information is created and recorded</p>
              </div>
            </li>
            <li>
              <img src="img/cookies.png"></img>
              <div>
                <p>The importance of cookie tracking, and the information they can hold</p>
              </div>
            </li>
            <li>
              <img src="img/writing.png"></img>
              <div>
                <p>The laws and documentation that go into online privacy</p>
              </div>
            </li>
          </ul>
          {/* Icon Source */}
          {/* <div>Icons made by <a href="https://www.flaticon.com/authors/trinh-ho" title="Trinh Ho">Trinh Ho</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
        </section>
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
  