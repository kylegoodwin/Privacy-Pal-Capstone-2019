import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './LocationQuiz.scss';

class LocationQuiz extends Component {

    constructor(props) {
        super(props);

        this.nextQuestion = this.nextQuestion.bind(this);

        this.state = {
            questionNum: 1
        }
    }

    nextQuestion() {
        this.setState({ questionNum: this.state.questionNum + 1 })
        console.log(this.state.questionNum)
    }

    render() {
        return (
            <div className="quiz-set-container">
                {(this.state.questionNum == 1) ? (<Q1 nextQuestion={this.nextQuestion} />) : ""}
                {(this.state.questionNum == 2) ? (<Q2 nextQuestion={this.nextQuestion} />) : ""}
            </div>
        );
    }
}

class Q1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayText: "",
            hasSelected: false
        }
    }

    showBox = (event) => {

        if (event.target.id == "one") {
            this.setState({ displayText: "This is the right choice! the app can get your location to get the weather but wont track you all the time."});
        } else if (event.target.id == "two") {
            this.setState({ displayText: "This app will now be able to track your locaiton all the time. They sell your data to creepy ad people :(" });
        } else {
            this.setState({ displayText: "This will keep you safe, but might be too restrictive" });
        }

        this.setState({ hasSelected: 'true' })
        
        console.log(this.props)
        console.log(this.state)

    }

    render() {

        const style = {
            backgroundImage: "url('" + process.env.PUBLIC_URL + "/img/screenshot-1.jpg')",
        }

        return (
            <div className="location-quiz-container">
                <div className="screenshot-container">
                    <div style={style} className="phone-screenshot">
                        <div id="one" onClick={this.showBox}></div>
                        <div id="two" onClick={this.showBox}></div>
                        <div id="three" onClick={this.showBox}></div>
                    </div>
                </div>
                <div className="reveal-container">

                    {!this.state.hasSelected ? (
                        <div>
                            <h2>Please Select The Option to Share Your Location</h2>
                            <p>
                                This is an example screenshot of how a phone application will ask for your location.
                                This is the weather channel, so it may be in your best interest to allow the app
                                to track your location. But you do may not want to let the app track your location application
                                at all times.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h1> How did you do?</h1>
                            <p>{this.state.displayText}</p>
                            <button id="next-question" className="next-arrow" onClick={this.props.nextQuestion}>
                                Next Question
                            </button>
                        </div>

                        )
                    }
                </div>
            </div>
        )
    }
}

class Q2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayText: "",
            hasSelected: false,
        }
    }
    
    render() {
        return (
            <div className="location-quiz-container">

            </div>
        )
    }
}

export default LocationQuiz;