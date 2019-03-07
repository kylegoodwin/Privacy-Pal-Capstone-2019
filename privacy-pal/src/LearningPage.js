import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LearningPage extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      tabNum: 1
    }
  }

  goBack = () => {
    if( this.state.tabNum > 0){ 
      this.setState({tabNum: this.state.tabNum - 1})
    }
    console.log(this.state);
  };

  goForward = () => {
    if( this.state.tabNum < 3){ 
    this.setState({tabNum: this.state.tabNum + 1})
    }
    console.log(this.state);
  };
  
  render() {
    return (
      <div className="learning-body">
        <SideBar></SideBar>
        <Quiz currentTab={1}  backButtonFunc={this.goBack} forwardButtonFunc={this.goForward}></Quiz>
      </div>
    );
  }
}




class SideBar extends Component {

  render() {
    return (
      
      <div className="sidebar-container">
       <p> working </p>
      </div>

    );
  }


}


class Quiz extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      
      <div className="quiz-container">
        <ProgressBar></ProgressBar>
        <QuizContent></QuizContent>
        <Buttons currentTab={this.props.currentTab} backButtonFunc={this.props.backButtonFunc} forwardButtonFunc={this.props.forwardButtonFunc}></Buttons>
      </div>

    );
  }


}

class ProgressBar extends Component {

  constructor(props){
    super(props)
  }


  render() {
    return (
      <div className="quiz-progress">
        <ul>
          <li className={ ( (this.props.currentTab == 1) ? 'current-tab' : "")}>
            <p>Why</p>
          </li>
          <li>
            <p>Managing Your Presence</p>
          </li>
          <li>
            <p>Quiz</p>
          </li>
        </ul>
      </div>
    )
  }

}

class QuizContent extends Component {
  

  render() {
    return (
      <div className="quiz-content">
        <div className="quiz-form">

        </div>
      </div>
    )
  }

}

class Buttons extends Component {

  constructor(props){
    super(props)
  }

 
    
  
  render() {
    return (
      <div className="button-container">
        <button id="quiz-back" onClick={this.props.backButtonFunc}>
          Back
        </button>
        <button id="quiz-forward" onClick={this.props.forwardButtonFunc}>
          Next
        </button>
      </div>
    )
  }
}
  
  export default LearningPage;