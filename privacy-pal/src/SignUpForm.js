import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

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
            <div className="login-register-page">
                <Row>
                    <Col>
                        <div>
                            <img src="img/HeaderLogo.png" className="logo"></img>
                        </div>
                        <div className="container sign-in-register">
                            <div>
                                <h2 className="sign-in-register-h2">Sign Up or Sign In</h2>
                            </div>
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
                                    <button className="btn btn-primary sign-up-button" onClick={this.handleSignUp}>Sign Up</button>
                                    <button className="btn btn-primary sign-in-button" onClick={this.handleSignIn}>Sign In</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SignUpForm