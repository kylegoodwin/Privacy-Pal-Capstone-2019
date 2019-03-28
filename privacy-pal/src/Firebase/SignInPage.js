import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import FirebaseContext, {withFirebase} from './FirebaseIndex';
import firebase from 'firebase/app';

import './SignInForm.scss';


const SignInPage = () => (
    <div>
        <SignInForm />
    </div>
)

// class SignInFormBase extends Component {
class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        };
    }

    handleChange = (event) => {
        let field = event.target.name;
        let value = event.target.value;

        let changes = {};           // Object to hold changes
        changes[field] = value;     // Change the field
        this.setState(changes);     // Update state
    }

    // handleSignIn = (email, password) =>
    // this.auth.signInWithEmailAndPassword(email, password);

    // // Handles signing in from App.js
    handleSignIn = (event) => {
        const { email, password } = this.state;

        this.setState({ errorMessage: null });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({email: '', password: ''})
        })
        .catch((err) => {
            this.setState({ errorMessage: err.nessage })
        })

        event.preventDefault();
    }

    render() {
        const { email, password } = this.state;

        const isInvalid = password === '' || email === '';

        return(
            <div className="login-page">
                <img src="img/HeaderLogo.png" style={{"margin": "auto", "display" : "block"}} className="sign-in-logo"></img>
                <div className="container sign-in-form">
                    <h2 className="sign-in-h2">Please Sign In</h2>
                    <form onSubmit={this.handleSignIn}>
                        {/* Email */}
                        <div className="form-group email">
                            <input className="form-control"
                                id="email"
                                type="text"
                                name="email"
                                onChange={this.handleChange}
                                placeholder="Email Address"
                            />
                        </div>

                        {/* Password */}
                        <div className="form-group password">
                            <input className="form-control"
                                id="password"
                                type="password"
                                name="password"
                                onChange={this.handleChange}
                                placeholder="Password"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="form-group">
                            <button className="btn btn-primary sign-in-button" disabled={isInvalid} type="submit">Sign In</button>
                            <NavLink to="/sign-up" className="nav-link">
                                <button className="btn btn-outline-info sign-up-option">Or Sign Up</button>
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

// const SignInForm = withFirebase(SignInFormBase);

export default SignInPage;

export { SignInForm }