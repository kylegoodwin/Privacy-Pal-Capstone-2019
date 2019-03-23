import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './.scss/SignUpForm.scss';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'email' : undefined,
            'password' : undefined
        };
    }

    handleChange = (event) => {
        let field = event.target.name;
        let value = event.target.value;

        let changes = {};           // Object to hold changes
        changes[field] = value;     // Change the field
        this.setState(changes);     // Update state
    }

    // Handles signing up from App.js
    handleSignUp = (event) => {
        event.preventDefault();
        this.props.signUpCallback(this.state.email, this.state.password);
    }

    // Handles signing in from App.js
    handleSignIn = (event) => {
        event.preventDefault();
        this.props.signInCallback(this.state.email, this.state.password);
    }

    render() {
        return(
            <div className="register-page">
                <img src="img/HeaderLogo.png" style={{"margin": "auto", "display" : "block"}} className="sign-up-logo"></img>
                <div className="container sign-up-form">
                    <div>
                        <h2 className="register-h2">Sign Up OnLy!</h2>
                    </div>
                    <form>
                        {/* First Name */}
                        <div className="form-group first-name">
                            <label htmlFor="first-name">First Name</label>
                            <input className="form-control"
                                id="first-name"
                                type="first-name"
                                name="first-name"
                                onChange={this.handleChange}
                            />
                        </div>
                    
                        {/* Last Name */}
                        <div className="form-group last-name">
                            <label htmlFor="last-name">Last Name</label>
                            <input className="form-control"
                                id="last-name"
                                type="last-name"
                                name="last-name"
                                onChange={this.handleChange}
                            />
                        </div>

                        {/* Email */}
                        <div className="form-group email">
                            <label htmlFor="email">Email</label>
                            <input className="form-control"
                                id="email"
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                            />
                        </div>

                        {/* Password */}
                        <div className="form-group password">
                            <label htmlFor="password">Password</label>
                            <input className="form-control"
                                id="password"
                                type="password"
                                name="password"
                                onChange={this.handleChange}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="form-group">
                            <button className="btn btn-primary sign-up-button" onClick={this.handleSignUp}>Sign Up</button>
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

export default SignUpForm