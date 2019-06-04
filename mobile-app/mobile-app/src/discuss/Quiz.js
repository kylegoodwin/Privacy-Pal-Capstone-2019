import React, { Component } from 'react';

const ALPHABET = ["A","B","C","D","E","F"];

export class Quiz extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hasAnswered: false,
      correctAnswer: false,
      questionNumber: 1
    }
  }

  hasAnswered = () => {
    this.setState({
      hasAnswered: true
    })
  }

  handleNext = () => {

    this.props.buttonFunction();
    this.setState({
      hasAnswered: false,
      correctAnswer: false
    })
  }

  handleAnswer = (answer) => {

    this.setState({
      questionNumber: this.state.questionNumber + 1
    })

    if (answer == this.props.question.correctIndex) {
      this.setState({
        correctAnswer: true,
      })
      this.props.responseHandler(true);
    }else{
      this.props.responseHandler(false);
    }
  }

  render = () => {
    let answers = this.props.question.answers;

    let display;

    console.log(this.state.hasAnswered);
    if (!this.state.hasAnswered) {
      display = <Question hasAnswered={this.hasAnswered} isPhotoQuestion={this.props.isPhotoQuestion} handleAnswer={this.handleAnswer} prompt={this.props.question.prompt} question={this.props.question} answers={answers} answer={this.props.question.correctIndex} questionNumber={this.state.questionNumber}> </Question>;
    } else {
      display = <Answer correctAnswer={this.state.correctAnswer} question={this.props.question} buttonFunction={this.handleNext}></Answer>
    }

    return (
      <div className="quiz-body">
        {display}
      </div>)
  }
}

export class Question extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeAnswer: -1
    }
  }

  handleNext = () => {
    this.props.hasAnswered();
    this.props.handleAnswer(this.state.activeAnswer);

  }

  handleAnswer = (event) => {
    this.setState({
      activeAnswer: event.target.id
    })
  }

  render() {

    let questionIndex = -1;

    let answers = this.props.answers.map((question) => {
      questionIndex++;
      return (<div className={(this.state.activeAnswer == questionIndex)? "quiz-answer quiz-answer-selected" : "quiz-answer"} id={questionIndex} onClick={this.handleAnswer}> <span id={questionIndex} onClick={this.handleAnswer}> {ALPHABET[questionIndex]}</span> {question}</div>)
    })

    return (
      <div className="question-body">
        <h1> Question {this.props.questionNumber}:</h1>
        {this.props.isPhotoQuestion && <img src={this.props.question.img}></img>}
        <h2>{this.props.prompt}</h2>
        {answers}
        <div onClick={this.handleNext} className="discuss-button">Submit</div>
      </div>
      
    )
  }
}

class Answer extends Component {


  render() {

    let display;
    let img;

    if (this.props.correctAnswer) {
      display = this.props.question.correctText;
      img = "https://media3.giphy.com/media/31lPv5L3aIvTi/giphy.gif?cid=790b76115cd5e6f4536f626b49c6dfef&rid=giphy.gif";
    } else {
      display = this.props.question.wrongText;
      img = "https://media1.giphy.com/media/BvLBKDhHSZdAY/giphy.gif?cid=790b76115cd5e8f42e495176774a42a0&rid=giphy.gif";
    }


    return (
      <div className="quiz-answer-body">
          <img src={img}></img>
          <div className="quiz-answer-text"> {display} </div>
        <div onClick={this.props.buttonFunction} className="discuss-button">Continue</div>
      </div>
    )
  }


}