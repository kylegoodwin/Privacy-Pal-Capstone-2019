import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import './.scss/LearningPage.scss';
import LocationQuiz from './LocationQuiz';

class LearningPage extends Component {

  constructor(props) {
    super(props);

    var myMap = new Map();
    myMap.set("Data Sharing", true)
    myMap.set("Identity", true)
    myMap.set("Passwords", false)
    myMap.set("Purchasing", true)
    myMap.set("Phishing", false)

    this.state = {
      tabNum: 1,
      titles: myMap,
      showNext: false,
    }
  }

  goBack = () => {
    if (this.state.tabNum > 1) {
      this.setState({ tabNum: this.state.tabNum - 1 })
    }
  };

  goForward = () => {
    if (this.state.tabNum < 3) {
      this.setState({ tabNum: this.state.tabNum + 1 })
    }
  };

  toggleNext = () => {
    /*
    this.setState({ showNext: !this.state.showNext })
    console.log("made it 20 step")
    */
  };

  render() {
    let lesson = {
      sectionOne: {
        title: "Why should you care about your sharing your location?",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellation",
      },
      sectionTwo: {
        title: "Example: Local News and Weather Apps are Selling Your Phone Location",
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
          forwardButtonFunc={this.goForward}
          toggleNextFunc={this.toggleNext}
          showNext={this.state.showNext}>
        </Quiz>
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
          <div className="module-box" id={"side" + i}>
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
        <QuizContent toggleNextFunc={this.props.toggleNextFunc} currentTab={this.props.currentTab} lessonData={this.props.lessonData}></QuizContent>
        <Buttons showNext={this.props.showNext} currentTab={this.props.currentTab} backButtonFunc={this.props.backButtonFunc} forwardButtonFunc={this.props.forwardButtonFunc}></Buttons>
      </div>

    );
  }


}

class ProgressBar extends Component {

  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div className="quiz-progress">
        <ul>
          <li className={((this.props.currentTab >= 1) ? 'current-tab' : "")}>
            <p>Why</p>
          </li>
          <li className={((this.props.currentTab >= 2) ? 'current-tab' : "")}>
            <p>How to Manage your Data</p>
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
        {(this.props.currentTab == 1) ? (<FirstTab lessonData={this.props.lessonData} />) : ""}
        {(this.props.currentTab == 2) ? (<SecondTab lessonData={this.props.lessonData} />) : ""}
        {(this.props.currentTab == 3) ? (<ThirdTab toggleNextFunc={this.props.toggleNextFunc} lessonData={this.props.lessonData} />) : ""}
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
      <div className="location-writing-container">
        <div className="writing-container">
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

        <div className="image-container" style={ {backgroundImage: "url(/img/NYTimesScreenshot.png)"}} >

        </div>
      </div>
    )
  }
}

class SecondTab extends Component {
  render() {
    return (
      <div className="managing-data">
        <h1>Steps to managing your data sharing</h1>
        <div className="learning-container">
          <div className="image-container">
            <img src="/img/screenshot-location-sharing.png"/>
          </div>
          <div className="writing-container">
            <p>
              {this.props.lessonData.sectionOne.text}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

class ThirdTab extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <LocationQuiz  toggleNextFunc={this.props.toggleNextFunc} />
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

        <button disabled={this.props.showNext} id="quiz-forward" className={((this.props.currentTab == 3) ? 'goldbutton' : "")} onClick={this.props.forwardButtonFunc}>
          {nextText}
        </button>

      </div>
      
    )
  }
}

export default LearningPage;