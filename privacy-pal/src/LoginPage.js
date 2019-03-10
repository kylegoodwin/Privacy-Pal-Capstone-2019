import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import App from './App';
import firebase from 'firebase/app';
import './LoginPage.scss'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
        }
    }
    
    // Handling authenticator changes
    componentDidMount() {
    this.authUnSubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
        if(firebaseUser) {    // User is signed in
        this.setState({
            user: firebaseUser
        })
        } else {
        this.setState({     // User is signed out 
            user: null
        })
        }
    })
    }

    // Stops listening for authenticator changes
    componentWillUnmount() {
    this.authUnSubFunction();
    }

    handleSignUp = (email, password) => {
    this.setState({ errorMessage: null });   // Clears any old errors

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        let firebaseUser = userCredential.user;
        console.log("User created: " + firebaseUser);
        })
        .catch((err) => { // Reports any errors
        console.log(err.message);
        this.setState({ errorMessage: err.message });
        })
    }

    handleSignIn = (email, password) => {
    this.setState({ errorMessage: null });

    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((err) => {
        this.setState({ errorMessage: err.nessage })
        })
    }

    // Signs the user out of firebase
    handleSignOut = () => {
    this.setState({ errorMessage: null });

    firebase.auth().signOut()
        .catch((err) => {
        this.setState({ errorMessage: err.message })
        })
    }

    render() {
        let content = null;
        if(!this.state.user) {   
            // If User is logged out
            content = (
                <SignUpForm
                    signUpCallback={this.handleSignUp}
                    signInCallback={this.handleSignIn}
                />
            );
        } else {
            content = (
            <div>
                <App>
                    {this.state.user}
                </App>
            </div>
            )
        }

        return(
            <div>
                {this.state.errorMessage &&
                    <p className="alert alert-danger">{this.state.errorMessage}</p>
                }
                {content}
            </div>
        )
    }
}

export default LoginPage;