import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Landing.css';
import './Landing2';
import Button from 'react-bootstrap/Button';
import { useSwipeable, Swipeable } from 'react-swipeable'
import Background from './landguy.jpg';
import './SignUp.js';
import { Link } from 'react-router-dom';


var sectionStyle = {
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    backgroundImage: `url(${Background})`
};
export class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
            // clicked: false, 
            signup: false
        }
      }
    
    signIn = () => {
    this.setState({ clicked: true })
    }

    signUp = () => {
    this.setState({ signup: true })
    }

    render() {
        // if (this.state.clicked) {
        //     return (
        //         <Redirect push to={'/Landing2'}/>
        //     )
        // } else if (this.state.signup) {
        //     return (
        //         <Redirect push to={'/SignUp'}/>
        //     )
        // }

        

        return (
            <div id="home" style={ sectionStyle }>
                <div id="landingBody">  
                    <div className="layer">
                        <h5 className="text-light text-center pt-1">Create an account or login to track your progress and start learning about digital privacy</h5>
                        <div className="wrapper d-line text-center"> 
                            <Link to="/Landing2" className="nav-link d-inline">
                                <Button className="b" variant="outline-warning">Sign In</Button>
                            </Link>
                            <Link to="/SignUp" className="/SignUp d-inline">
                                <Button className="b ml-3" variant="outline-warning">Sign Up</Button>
                            </Link>
                        </div>
                    </div>            
                {/* <Swipeable onSwipedRight={(event) => this.handleClick}> */}
                    <div>
                        {/* <div class="card-overlay"> */}
                        <h2 className="text-white">PrivacyPal</h2>
                        <img id="logo" src="img/Tab-Icon.png" alt="icon"></img>
                        <h5 id="map" className="text-white">Your Road Map to the</h5>
                        <h5 id="futures" className="text-white">Future</h5>
                    </div>
                    <div id="circles">
                            <span id="d1"></span>
                            <span id="ultra" className="dot"></span>
                    </div>
                    {/* <Link to='/Landing2'>{this.props.title}</Link> */}
                {/* </Swipeable> */}
                {/* </div>    */}
                </div>    
        </div>  
        )
    }
}

