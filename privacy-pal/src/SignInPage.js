import React, { Component } from 'react';
import SignInForm from './SignInForm';
import App from './App';
import firebase from 'firebase/app';

class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: '',
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
                <SignInForm
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

export default SignInPage;