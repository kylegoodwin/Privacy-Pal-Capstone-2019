import React, { Component } from 'react';

export class Discuss extends Component {
  render() {

    return (
      <div className="discuss-body">
        <DiscussQuestion buttonFunction={this.props.buttonFunction} prompt={this.props.prompt}></DiscussQuestion>
      </div>) 
  }
}



class DiscussQuestion extends Component {

  handleNext = () => {

    document.getElementById("text-input").value = "";

    this.props.buttonFunction();
  }

  render() {

    return (
      <div className="discuss-body">
        <div className="discuss-card">
          <div className="prompt-container">
          <span className="discuss-prompt">{this.props.prompt}</span>
          <textarea id="text-input" placeholder="What do you think?"></textarea>
          </div>
          
        </div>
        <div onClick={this.handleNext} className="discuss-button">Continue</div>
      </div>
    )
  }



}