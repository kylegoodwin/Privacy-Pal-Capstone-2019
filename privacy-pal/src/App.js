import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Header';
import MainBody from './LandingBody';
import LearningPage from './LearningPage'
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <MainBody></MainBody>
      {/* <LearningPage></LearningPage> */}
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
