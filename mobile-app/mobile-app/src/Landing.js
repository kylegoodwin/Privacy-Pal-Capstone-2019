import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './Landing.css';
import './Landing2'
import { useSwipeable, Swipeable } from 'react-swipeable'
export class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {clicked: false
        }
      }
    
    handleClick = () => {
    this.setState({ clicked: true })
    }
    render() {
        if (this.state.clicked) {
            return (
                <Redirect push to={'/Landing2'}/>
            )
        }
        return (
            <body id="landingBody" onClick={this.handleClick}>              
            {/* <Swipeable onSwipedRight={(event) => this.handleClick}> */}
                <div>
                    <img className="vertical-align:middle" src='/img/Tab-Icon.png' alt="Logo" />
                    <h1 className="text-white">PrivacyPal</h1>
                    <h6 className="text-white">Your Road Map to </h6>
                    <div className="col-md-12 bs-linebreak"> </div>
                    <h6 id="future" className="text-white">the Future. </h6>
                </div>
                <div id="circles">
                        <span className="dot"></span>
                        <span id="other" className="dot"></span>
                </div>
                <Link to='/Landing2'>{this.props.title}</Link>
            {/* </Swipeable> */}
            </body>          
        )
    }
}

