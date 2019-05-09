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

  render() {

    return (
      <div className="discuss-body">
        <div className="discuss-card">
          <div className="prompt-container">
          <span className="discuss-prompt">{this.props.prompt}</span>
          <textarea>What do you think?</textarea>
          <button onClick={this.props.buttonFunction} type="button"> Send </button>
          </div>
        </div>
      </div>
    )
  }



}