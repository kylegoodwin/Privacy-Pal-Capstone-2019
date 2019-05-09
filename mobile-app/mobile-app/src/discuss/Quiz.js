import React, { Component } from 'react';

export class Quiz extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hasAnswered: false,
      correctAnswer: false
    }
  }

  hasAnswered = () => {
    this.setState({
      hasAnswered: true
    })
  }

  handleAnswer = (answer) => {

    if (answer == this.props.question.correctIndex) {
      this.setState({
        correctAnswer: true
      })
    }
  }

  render = () => {
    let answers = this.props.question.answers;

    let display;

    if (!this.state.hasAnswered) {
      display = <Question hasAnswered={this.hasAnswered} handleAnswer={this.handleAnswer} prompt={this.props.question.prompt} answers={answers} answer={this.props.question.correctIndex}> </Question>;
    } else {
      display = <Answer correctAnswer={this.state.correctAnswer} question={this.props.question} buttonFunction={this.props.buttonFunction}></Answer>
    }

    return (
      <div className="quiz-body">
        {display}
      </div>)
  }
}

export class Question extends Component {

  handleAnswer = (event) => {

    this.props.hasAnswered();
    this.props.handleAnswer(event.target.id);

  }

  render() {

    let questionIndex = -1;

    let answers = this.props.answers.map((question) => {
      questionIndex++;
      return (<div id={questionIndex} onClick={this.handleAnswer}>{question}</div>)
    })


    return (
      <div className="question-body">
        <h1> Question 1:</h1>
        <h2>{this.props.prompt}</h2>
        {answers}

      </div>
    )
  }
}


class Answer extends Component {

  render() {

    let display;

    if (this.props.correctAnswer) {
      display = this.props.question.correctText;
    } else {
      display = this.props.question.wrongText;
    }


    return (
      <div className="quiz-answer-body">
        <div>
          <span> {display} </span>
        </div>
        <button onClick={this.props.buttonFunction} > Next Question </button>
      </div>
    )
  }


}