import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Header';
import MainBody from './LandingBody';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <MainBody></MainBody>
      </div>
    );
  }
}

export default App;
