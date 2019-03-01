import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component {
    render() {
      return (
        <div className="footer">
        <ul>
            <li>< img src="img/HeaderLogo.png" className="logo"></img></li>
            <li>About</li>
            <li>Legal</li>
            <li>Contact Us</li>
        </ul>
        </div>
      );
    }
  }
  
  export default Footer;