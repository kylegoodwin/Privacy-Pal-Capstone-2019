import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './Landing.css';
import './Landing2'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
logo:{
    width: '80%',

},
pagination:{
    backgroundColor: 'black',
    height: '100px',
    width: '100px',
},
  root: {
    position: 'relative',
    height: '100vh',
  },
  slide: {
    padding: 15,
    height: '100vh',
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
    textAlign: 'center',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

export class Landingd extends Component {
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
            <div id="landingBody" onClick={this.handleClick}>              
            </div>          
        )
    }
}

export class Landing extends Component {
    state = {
      index: 0,
    };
  
    handleChangeIndex = index => {
      this.setState({
        index,
      });
    };
  
    render() {
      const { index } = this.state;
  
      return (
        <div style={styles.root}>
          <SwipeableViews index={index} enableMouseEvents onChangeIndex={this.handleChangeIndex}>
            <SlideOne></SlideOne>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
          </SwipeableViews>
          <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
        </div>
      );
    }
  }

  class SlideOne extends Component{


    render(){
        return(
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
        <img style={Object.assign({}, styles.logo)} src="img/HeaderLogo.png"></img>
        
        
        </div>
        )
    }


  }

