import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Discuss extends Component {
  render() {
    let answers = ["Everyone", "Just my followers", "Just me"];
    return (
      <div className="discuss-body">
        <DiscussQuestion prompt={"Who do you want to connect with on social media?"}></DiscussQuestion>
      </div>)
  }
}



class DiscussQuestion extends Component {

  render() {

    return (
      <div>
      <div className="story-toolbar"> <Link to="/"><img id="home-button" src="img/home.svg"/></Link>   </div>
      <div className="discuss-body">
        <div className="discuss-card">
          <div className="prompt-container">
          <span className="discuss-prompt">{this.props.prompt}</span>
          <textarea>What do you think?</textarea>
          <button type="button"> Send </button>
          </div>
        </div>
      </div>
      </div>
    )
  }



}