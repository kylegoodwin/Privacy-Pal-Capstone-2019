import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDAWOOIDfoqr_Ygu_ppd5lFWq0YV_fCBMc",
    authDomain: "info-capstone-db.firebaseapp.com",
    databaseURL: "https://info-capstone-db.firebaseio.com",
    projectId: "info-capstone-db",
    storageBucket: "info-capstone-db.appspot.com",
    messagingSenderId: "1007568597264"
  };
  firebase.initializeApp(config);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
