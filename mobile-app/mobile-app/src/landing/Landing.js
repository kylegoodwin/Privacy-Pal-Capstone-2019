import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './Landing.css';
import './Landing2'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import Button from 'react-bootstrap/Button';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
    logo: {
        width: '80%',
    },
    mainImage: {
        width: '60%',
        marginTop: '1em'
    },
    bottomText: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        color: 'white',
        fontSize: '1.5em'

    },
    bottomButtom: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        color: 'white',
        fontSize: '1em',
        width: '40%'

    },
    pagination: {
        backgroundColor: 'black',
        height: '100px',
        width: '100px',
    },
    root: {
        position: 'relative',
        height: window.innerHeight,
    },
    slide: {
        position: 'abosolute',
        paddingTop: '1em',
        height: window.innerHeight,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    slide1: {
        backgroundColor: '#6AC0FF',
    },
    slide2: {
        backgroundColor: '#303c71',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
};


const landingText = ["You want to connect with your friends online, but the internet is not safe!",[`When used the right way, social media can be a great way to stay in touch.`,`We will teach you how to utilize this tool, and avoid its consequences!`],["Tap the stories to learn about each topic.","Test your knowlege on the quizes.","When you finish, we will send a certificate to your parents. "]]

export class Landing extends Component {
    state = {
        index: 0,
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    completeIntro = () => {
        localStorage.setItem("app-intro", "true");
        this.props.updatePage();
    }

    render() {
        const { index } = this.state;
        let bottomText = (<div style={Object.assign({}, styles.bottomText)}>Swipe to see how! ►</div>);


        if( this.state.index == 2){
            bottomText = (<div style={Object.assign({}, styles.bottomButtom)} onClick={this.completeIntro} className="discuss-button">Get Started</div>);
        }else if( this.state.index == 0){
            bottomText = (<div style={Object.assign({}, styles.bottomText)}>Swipe to learn more ►</div>);
        }

        return (
            <div style={styles.root}>
                <SwipeableViews index={index} enableMouseEvents onChangeIndex={this.handleChangeIndex}>
                    <Slide index={1} isFirst imageName="selfie.svg"></Slide>
                    <Slide index={2} imageName="app.svg"></Slide>
                    <Slide isLast index={3} updatePage={this.props.updatePage} imageName="kids.svg"></Slide>
                </SwipeableViews>
                <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
                {bottomText}
            </div>
        );
    }
}

class Slide extends Component {


    render() {

        const imageOne = "img/landing/header.svg"
        const imageTwo = `img/landing/${this.props.imageName}`

        let toDisplay;

        console.log(typeof(landingText[this.props.index - 1]));
        if(typeof(landingText[this.props.index - 1]) === "object"){
            let temp = landingText[this.props.index - 1].map( (sentence) => {
                return <li> {sentence}</li>
            })
            toDisplay = <ol style={{listStyleType: "none"}}>{temp}</ol>
        }else{
            toDisplay = landingText[this.props.index - 1]
        }


        return (
            <div className="landing-text-container" style={Object.assign({}, styles.slide, styles[`slide${this.props.index}`])}>
                {this.props.isFirst && <img style={Object.assign({}, styles.logo)} src={imageOne}></img>}
                <img style={Object.assign({}, styles.mainImage)} src={imageTwo}></img>
                <div className="landing-text"> {toDisplay} </div>
            </div>
        )
    }


}

