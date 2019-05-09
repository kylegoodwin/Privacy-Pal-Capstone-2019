import React, { Component } from 'react';

export class Quiz extends Component {

    render() {
        let answers = ["Everyone","Just my followers","Just me"];
      return ( 
      <div className="quiz-body">
    <Question buttonFunction={this.props.buttonFunction} question="Who can see the pictures that you post?" answers={answers} answer={0}> </Question>
       </div>)
    }
}

export class Question extends Component {

  render() {

    let answers = this.props.answers.map( (question) => {
        return(<div><span>{question}</span> </div>)
    })


    return (
      <div className="question-body">
      <div onClick={this.props.buttonFunction} > test </div>
      <h1> Question 1:</h1>
      <h2>{this.props.question}</h2>
      {answers}
      
      </div>
    )
  }
}


class Answer extends Component {

    render(){
        return(
        <div>
        <span> You are wrong!  You must also consider that the people who have access to you content can store it and send it any where they please.</span>
        </div>
        )
    }


}