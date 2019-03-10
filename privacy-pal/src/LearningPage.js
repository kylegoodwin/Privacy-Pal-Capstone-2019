import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import './LearningPage.scss';

class LearningPage extends Component {

  constructor(props) {
    super(props);

    var myMap = new Map();
    myMap.set("Identity", true)
    myMap.set("Passwords", false)
    this.state = {
      tabNum: 1,
      titles: myMap,
    }
  }

  goBack = () => {
    if (this.state.tabNum > 1) {
      this.setState({ tabNum: this.state.tabNum - 1 })
    }
    console.log(this.state);
  };

  goForward = () => {
    if (this.state.tabNum < 3) {
      this.setState({ tabNum: this.state.tabNum + 1 })
    }
    console.log(this.state);
  };

  render() {
    let lesson = {
      sectionOne: {
        title: "Why should you care about your identity online?",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellation",
      },
      sectionTwo: {
        title: "Example: Harvard Rescinds Admission Of 10 Students Over Obscene Facebook Messages",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellation",
      },
      image: "url/pic"



    }
    return (
      <div className="learning-body">
        <SideBar modulesList={this.state.titles}></SideBar>
        <Quiz lessonData={lesson} 
              currentTab={this.state.tabNum} 
              backButtonFunc={this.goBack} 
              forwardButtonFunc={this.goForward}></Quiz>
      </div>
    );
  }
}


class SideBar extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let list = Array.from(this.props.modulesList.keys())

    let listItems = list.map((title, i) => {

      return (
        <li key={i}>
          <div className="module-box">
            <div className="checkbox"></div>
            <p>{title}</p>
          </div>
        </li>
      );


    });

    return (
      <div className="sidebar-container">
        <div className="modules-container">
          <ul>
            {listItems}
          </ul>
        </div>
      </div>

    );
  }
}


class Quiz extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div className="quiz-container">
        <ProgressBar currentTab={this.props.currentTab}></ProgressBar>
        <QuizContent currentTab={this.props.currentTab} lessonData={this.props.lessonData}></QuizContent>
        <Buttons currentTab={this.props.currentTab} backButtonFunc={this.props.backButtonFunc} forwardButtonFunc={this.props.forwardButtonFunc}></Buttons>
      </div>

    );
  }


}

class ProgressBar extends Component {

  constructor(props) {
    super(props)
  }


  render() {

    console.log(this.props.currentTab);
    return (
      <div className="quiz-progress">
        <ul>
          <li className={((this.props.currentTab >= 1) ? 'current-tab' : "")} onClick="">
            <p>Why</p>
          </li>
          <li className={((this.props.currentTab >= 2) ? 'current-tab' : "")}>
            <p>Managing Your Presence</p>
          </li>
          <li className={((this.props.currentTab >= 3) ? 'current-tab' : "")}>
            <p>Quiz</p>
          </li>
        </ul>
      </div>
    )
  }

}

class QuizContent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="quiz-content">
        <div className="quiz-form">
        {(this.props.currentTab == 1)? (<FirstTab lessonData={this.props.lessonData} />): ""}
        {(this.props.currentTab == 2)? (<SecondTab lessonData={this.props.lessonData} />): ""}
        {(this.props.currentTab == 3)? (<ThirdTab lessonData={this.props.lessonData} />): ""}
        </div>
      </div>
    )
  }

}

class FirstTab extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="writing">
          <h1>
            {this.props.lessonData.sectionOne.title}
          </h1>
          <p>
            {this.props.lessonData.sectionOne.text}
          </p>
          <h1>
            {this.props.lessonData.sectionTwo.title}
          </h1>
          <p>
            {this.props.lessonData.sectionTwo.text}
          </p>
        </div>
        <div className="image">
          {/* <img className='picture'></a> */}
        </div>
      </div>
    )
  }
}

class SecondTab extends Component {
  render() {
    return (
      <div>

        <h1> COMING SOON!!!!!!!!</h1>
      </div>
    )
  }
}

class ThirdTab extends Component {
  render() {
    return (
      <div className="quiz-form">

      <Form></Form>

      </div>
    )
  }
}

class Buttons extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    var nextText = "Next"

    if (this.props.currentTab == 3) {
      nextText = "Finish";
    }

    return (
      <div className="button-container">
        <button id="quiz-back" onClick={this.props.backButtonFunc}>
          Back
        </button>
        <button id="quiz-forward" className={((this.props.currentTab == 3) ? 'goldbutton' : "")} onClick={this.props.forwardButtonFunc}>
          {nextText}
        </button>
      </div>
    )
  }
}

export default LearningPage;