import './Landing2.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router';

export class Landing2 extends Component {
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
                <Redirect push to={'/Discover'}/>
            )
        }
        return (
            <body id="body2">
                <div>
                <h2>
                    <Link className="swagither" to='/' title="previous page" class="previous">&laquo; </Link>
                </h2>
                    <h1 className="text-white">Begin</h1>
                    <h1 className="text-white">Your</h1>
                    <h1 className="text-white">Journey</h1>
                    <h1 className="text-white">Today</h1>
                    <div className="d-inline" id="circles2">
                        <span className="d-inline" id="dot2" class="dot"></span>
                        <span className="d-inline" id="other2" class="dot"></span>
                    </div>
                    <Button variant="outline-light" onClick={this.handleClick}>Click Here to Begin
                        <Link to='/Discover'></Link>
                    </Button>                    
                </div>
            </body>
        )
    }
}
