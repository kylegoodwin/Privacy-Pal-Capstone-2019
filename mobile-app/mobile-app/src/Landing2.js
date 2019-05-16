import './Landing2.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router';
import Background from './landing2.jpg';
import firebase from 'firebase/app';
import { Discover } from './Discover';

var sectionStyle = {
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    backgroundImage: `url(${Background})`
};
export class Landing2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            // clicked: false,
            email: undefined,
            parentEmail: undefined,
            password: undefined,
            signedIn: false
        }
      }
    
    handleSignIn = (event) => {
        event.preventDefault();
        this.setState({errorMessage:null}); //clear any old errors
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            this.setState({ signedIn: true});
        })
          .catch((err) => {
            console.log(err);
            this.setState({errorMessage: err.message});
          });
      }  

    handleChange = (event) => {
        let field = event.target.name; //which input
        let value = event.target.value; //what value

        let changes = {}; //object to hold changes
        changes[field] = value; //change this field
        this.setState(changes); //update state
    }

    render() {
        if(this.state.signedIn === true){
            return <Discover></Discover>
        }

        return (
            <div id="home" style={ sectionStyle }>
            <div id="landingBody">  
                <div className="layer2">
                <form className="text-center">
                    <label className="text-dark pt-4" for="exampleInputEmail1">Email address</label>
                    <div className="form-group form-inline justify-content-center">
                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <label className="text-dark"for="exampleInputPassword1">Password</label>
                    <div className="form-group  form-inline justify-content-center">
                    <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={this.handleChange} placeholder="Password"/>
                    </div>
                    <div className="text-center form-inline justify-content-center"> 
                        <button type="submit" className="btn btn-warning" onClick={this.handleSignIn}>Login</button>
                    </div>
                    <Link to="/" className="nav-link">
                        <a href="#" className="previous round float-left ml-2 mt-3" onClick={this.goBack}>&#8249;</a>
                    </Link>
                </form>
                </div>            
            {/* <Swipeable onSwipedRight={(event) => this.handleClick}> */}
                <div>
                    {/* <div class="card-overlay"> */}
                    <h2 className="text-white">PrivacyPal</h2>
                    <img id="logo" src="img/Tab-Icon.png" alt="icon"></img>
                    <div className="continue"> 
                        <h5 className="text-white">Continue your Journey</h5>
                    </div>
                </div>
                <div id="circles">
                        <span className="dot"></span>
                        <span id="other" className="dot"></span>
                </div>
                {/* <Link to='/Landing2'>{this.props.title}</Link> */}
            {/* </Swipeable> */}
            {/* </div>    */}
            </div>    
    </div>  
        )
    }
}
