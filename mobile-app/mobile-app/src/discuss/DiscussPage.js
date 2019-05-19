import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Discuss } from './Discuss';
import { Quiz } from './Quiz';
import { Route, Redirect } from 'react-router-dom';

export class DiscussPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      questionNumber: 0,
      correctNumber: 0,
      multiChoiceNumber: 0
    }
  }

  responseHandler = (correctAnswer) => {

    let newNumber = this.state.multiChoiceNumber + 1;
    this.setState({multiChoiceNumber: newNumber});


    if(correctAnswer){
    let newValue = this.state.correctNumber + 1;
    this.setState({
      correctNumber: newValue
    })
  }

  }


  whatContentToDisplay = (displayItem) => {

    if( displayItem.type == "question" ){
      return <Quiz question={displayItem.question} responseHandler={this.responseHandler} buttonFunction={this.buttonFunction} ></Quiz>;
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

  }

  render() {

    let display;

    if( this.state.questionNumber < this.props.content.length){
      display =  this.whatContentToDisplay(this.props.content[this.state.questionNumber]);
    }else{
      console.log("correct number : "+ this.state.correctNumber);
      //display = <Route><Redirect to="/Discover" /></Route>;
      display = <h1 className="quiz-final"> You got {this.state.correctNumber} right out of {this.state.multiChoiceNumber}!</h1>
    }
     
    return (
      <div>
        <div className={"quiz-toolbar"}> <Link to="/"><img id="home-button" src="img/home.svg" /></Link>   </div>
        {display}
      </div>)
  }
}