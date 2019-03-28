import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import FirebaseContext, {withFirebase} from './FirebaseIndex';
import firebase from 'firebase/app';

import './SignUpForm.scss';
import { stringify } from 'querystring';

class SignUpPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SignUpForm />
            </div>
        )
    }
}

// class SignUpFormBase extends Component {
class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
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

    handleSignUp = (event) => {
        const { username, email, password } = this.state;

        this.setState({ errorMessage: null });   // Clears any old errors

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let firebaseUser = userCredential.user;

                if(firebaseUser) {
                    firebaseUser.updateProfile({
                        displayName: username
                    })
                }   

                // Sets the inputs back to empty after user has signed up
                this.setState({
                    username: '',
                    email : '',
                    password: ''
                })
            })

            .catch((err) => { // Reports any errors
                console.log(err.message);
                this.setState({ errorMessage: err.message });
            })

        event.preventDefault();    
    }


    render() {

        // const {
        //     username,
        //     email,
        //     password
        // } = this.state;

        const isInvalid =
            this.state.username === '' ||
            this.state.email === '' ||
            this.state.password === '';
        
        return(
            <div className="register-page">
                <img src="img/HeaderLogo.png" style={{"margin": "auto", "display" : "block"}} className="sign-up-logo"></img>
                <div className="container sign-up-form">
                    <div>
                        <h2 className="register-h2">Sign Up OnLy!</h2>
                    </div>
                    <form onSubmit={this.handleSignUp}>
                        {/* Usename */}
                        <div className="form-group username">
                            {/* <label htmlFor="username">Username</label> */}
                            <input className="form-control"
                                id="username"
                                type="text"
                                name="username"
                                onChange={this.handleChange}
                                placeholder="Username"
                            />
                        </div>

                        {/* Email */}
                        <div className="form-group email">
                            {/* <label htmlFor="email">Email</label> */}
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
                            {/* <label htmlFor="password">Password</label> */}
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
                            <button className="btn btn-primary sign-up-button" disabled={isInvalid} type="submit">Sign Up</button>
                            <NavLink to="/sign-in" className="nav-link">
                                <button className="btn btn-outline-info">Or Sign In</button>
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

// const SignUpForm = withFirebase(SignUpFormBase);

export default SignUpPage;

export { SignUpForm };