import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import App from './App';
import firebase from 'firebase/app';

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }
    }
    
    // Handling authenticator changes
    componentDidMount() {
    this.authUnSubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
        if(firebaseUser) {    // User is signed in
        this.setState({
            firstName: firebaseUser
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


    render() {
        return(
            <div>
                {this.state.errorMessage &&
                    <p className="alert alert-danger">{this.state.errorMessage}</p>
                }
                
                <SignUpForm
                    signUpCallback={this.handleSignUp}
                />
            </div>
        )
    }
}

export default SignUpPage;