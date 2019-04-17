import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

export class NavBar extends Component {
    render() {
        return (
            <div>
                
               <ProgressBar animated now={55}/>
            </div>
        )
    }
}
