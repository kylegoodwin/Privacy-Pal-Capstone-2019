import React, { Component } from 'react';
import { NavBar } from './NavBar';
import { Link } from 'react-router-dom';

export class CardOne extends Component {
    render() {
        return (
        <div>
            <Link to='/' className="previous">&#8249;</Link>
            <NavBar></NavBar>
        </div>
     
        )
    }
}