import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
    render() {
      return (
        <div className="header">
        <ul>
            <li>< img src="img/HeaderLogo.png" className="logo"></img></li>
            <li>What do we do?</li>
            <li>Why should you care?</li>
            <li>Register </li>
        </ul>
        </div>
      );
    }
  }
  
  export default Header;
  