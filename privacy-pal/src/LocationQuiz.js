import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './LocationQuiz.scss';
import { Button } from 'react-bootstrap';

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
                {(this.state.questionNum == 1) ? (<BeginQuiz nextQuestion={this.nextQuestion} />) : ""}
                {(this.state.questionNum == 2) ? (<Q1 nextQuestion={this.nextQuestion} />) : ""}
                {(this.state.questionNum == 3) ? (<Q2 nextQuestion={this.nextQuestion} />) : ""}
            </div>
        );
    }
}

class BeginQuiz extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="quiz-overview-container">
                <div className="quiz-overview">
                    <h1>Quiz Time!</h1>
                    <p>
                        Now that you have learned a litle about tracking location data, it is
                        time to put those skills to the test! You will be asked a series of
                        questions from Apps that ask your permission to share your location
                        with them. It is up to you to choose which apps you should be sharing
                        your location with, and which ones to block from sharing your
                    </p>
                    <button type="button" class="btn btn-outline-dark btn-lg" onClick={this.props.nextQuestion}>Let's Begin!</button>
                </div>
               
            </div>
        )
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

        return (
            <div className="location-quiz-container">
                <div className="screenshot-container">
                    <img src="/img/screenshot-1.jpg" />
                </div>
                <div className="reveal-container">

                    {!this.state.hasSelected ? (
                        <div className="text">
                            <h2>Please Select The Option to Share Your Location</h2>
                            <p>
                                This is an example screenshot of how a phone application will ask for your location.
                                This is the weather channel, so it may be in your best interest to allow the app
                                to track your location. But you do may not want to let the app track your location application
                                at all times.
                            </p>
                            <h2>Do you?</h2>
                            <div className="buttons-container">
                                <br className="text-center " /> 
                                    <Button id="one" variant="outline-primary" onClick={this.showBox}>Allow While Using App</Button>
                                <br className="text-center" />
                                    <Button id="two" variant="outline-primary" onClick={this.showBox}>Always Allow</Button> 
                                <br className="text-center" />
                                    <Button id="three" variant="outline-primary" onClick={this.showBox}>Don't Allow</Button> 
                            </div>
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
    

    showBox = (event) => {

        if (event.target.id == "one") {
            this.setState({ displayText: "This is the right choice! Since Waze is a driving app, it does not need access to an exercising app."});
        } else {
            this.setState({ displayText: "This is incorrect. Giving Waze access to other apps that it is not related to puts your information at risk of being taken." });
        }

        this.setState({ hasSelected: 'true' })
        
        console.log(this.props)
        console.log(this.state)

    }


    render() {

        const style = {
            backgroundImage: "url('" + process.env.PUBLIC_URL + "/img/screenshot-2.png')",
        }

        return (
            <div className="location-quiz-container">
                <div className="screenshot-container">
                    <div style={style} className="phone-screenshot">

                    </div>
                </div>
                <div className="reveal-container">

                    {!this.state.hasSelected ? (
                        <div className="text-center">
                            <h2>Please Select The Option to Share Your Location</h2>
                            <p>
                                In this example, Waze, a driving navigation map, is asking you to give
                                access to your Motion and Fitness activity. What do you choose? 
                            </p>
                            <h2>Do you?</h2>
                            <div className="buttons-container">
                                <br className="text-center " /> 
                                    <Button id="one" variant="outline-primary" onClick={this.showBox}>Allow</Button>
                                <br className="text-center " /> 
                                    <Button id="two" variant="outline-primary" onClick={this.showBox}>Don't Allow</Button>
                            </div>
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

export default LocationQuiz;