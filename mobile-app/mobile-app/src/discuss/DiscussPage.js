import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Discuss } from './Discuss';
import { Quiz } from './Quiz';
import {Content} from './content';
import { Route, Redirect } from 'react-router-dom';

export class DiscussPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      questionNumber: 0
    }
  }


  whatContentToDisplay = (displayItem) => {

    if( displayItem.type == "question" ){
      return <Quiz question={displayItem.question} buttonFunction={this.buttonFunction} ></Quiz>;
    }

    if( displayItem.type == "response"){
      return <Discuss buttonFunction={this.buttonFunction} prompt={displayItem.prompt}></Discuss>;
    }

    //add in photo type of quiz


  }


  buttonFunction = () => {
    
    let newValue = this.state.questionNumber + 1;
    this.setState({
      questionNumber: newValue
    })
    console.log("button function " + this.state.questionNumber);

  }

  render() {

    let display;

    if( this.state.questionNumber < Content.length){
      display =  this.whatContentToDisplay(Content[this.state.questionNumber]);
    }else{
      display = <Route><Redirect to="/Discover" /></Route>;
    }
     
    return (
      <div>
        <div className="story-toolbar"> <Link to="/"><img id="home-button" src="img/home.svg" /></Link>   </div>
        {display}
      </div>)
  }
}