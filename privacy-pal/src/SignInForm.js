import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './.scss/SignInForm.scss';

class SignInForm extends Component {
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

    // Handles signing in from App.js
    handleSignIn = (event) => {
        event.preventDefault();
        this.props.signInCallback(this.state.email, this.state.password);
    }

    render() {
        return(
            <div className="login-page">
                <img src="img/HeaderLogo.png" style={{"margin": "auto", "display" : "block"}} className="sign-in-logo"></img>
                <div className="container sign-in-form">
                    <h2 className="sign-in-h2">Please Sign In</h2>
                    <form>
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
                            <button className="btn btn-primary sign-in-button" onClick={this.handleSignIn}>Sign In</button>
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

export default SignInForm