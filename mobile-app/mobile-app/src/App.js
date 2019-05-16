import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Discover } from './Discover';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CardOne } from './CardOne';
import firebase from 'firebase/app';
import {Landing} from './Landing';
import {SignUp} from './SignUp';
import {Landing2} from './Landing2';
import { Link } from 'react-router-dom';

require('firebase/auth');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null, loading: true
    };
  }

  componentDidMount() {
    this.authUnRegFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if(firebaseUser) {
        this.setState({user: firebaseUser, loading: false});
      } else {
        this.setState({user: null});
      }
    });
  }

  componentWillUnmount() {
    this.authUnSubFunction();
  }

  //A callback function for logging out the current user
  handleSignOut = () => {
    this.setState({errorMessage:null}); //clear any old errors
    firebase.auth().signOut()
    /* TODO: sign out user here */
  }

  render() {

    let showError = '';
    if(this.state.errorMessage) {
      showError = (
        <div>
          <p className="alert alert-danger">{this.state.errorMessage}</p>
        </div>
      )
    }
    // If website user isn't currently logged in
    // if(this.state.user) {
    //   return (
    //     <Discover 
    //     />
    //   );
    // }

    // if(this.state.loading) {
    //   return (
    //     <div class="text-center">
    //       <i class="fa fa-spinner fa-spin fa-3x" aria-label="Connecting..."></i>
    //     </div>
    //   )
    // }


    return ( 
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={(routeProps) => (
                <Landing/>
              )} />
            <Route exact path='/Discover' render={(routeProps) => (
              <div>
                  <Toolbar />
                  <Discover />
              </div>
              )} />
              <Route exact path='/Landing2' render={(routeProps) => (
                <Landing2 
                />
              )} />
               <Route exact path='/SignUp' render={(routeProps) => (
                <SignUp />
              )} />
              <Route exact path='/CardOne' render={(routeProps) => (
                <CardOne />
              )} />   
              <Route exact path='/Landing' render={(routeProps) => (
                <Landing />
              )} /> 
         </Switch>
      </BrowserRouter>
    )
  }
}


class Toolbar extends Component {

  render(){
    return(
    <div className="toolbar">
    <h1>Discover</h1>
    </div>
    )
  }
}

export default App;
