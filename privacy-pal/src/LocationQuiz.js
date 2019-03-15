import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './LocationQuiz.scss';
import { Button } from 'react-bootstrap';

class LocationQuiz extends Component {

    constructor(props) {
        super(props);

        this.answeredCorrectly = this.answeredCorrectly.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);

        this.state = {
            questionNum: 0,
            numCorrect: 0
        }
    }

    answeredCorrectly() {
        this.setState({ numCorrect: this.state.numCorrect + 1 })
    }
    
    nextQuestion() {
        this.setState({ questionNum: this.state.questionNum + 1 })
        console.log(this.state.questionNum)
    }

    render() {
        return (
            <div className="quiz-set-container">
                {(this.state.questionNum == 0) ? (<BeginQuiz toggleNextFunc={this.props.toggleNextFunc}                                                   nextQuestion={this.nextQuestion} 
                                                             currentQuestion={this.state.questionNum} />) : ""}
                {(this.state.questionNum == 1) ? (<Q1 nextQuestion={this.nextQuestion} 
                                                      correctAnswer={this.answeredCorrectly} 
                                                      currentQuestion={this.state.questionNum} />) : ""}
                {(this.state.questionNum == 2) ? (<Q2 nextQuestion={this.nextQuestion} 
                                                      correctAnswer={this.answeredCorrectly} 
                                                      currentQuestion={this.state.questionNum }/>) : ""}
                {(this.state.questionNum == 3) ? (<Q3 nextQuestion={this.nextQuestion} 
                                                      correctAnswer={this.answeredCorrectly}
                                                      currentQuestion={this.state.questionNum } />) : ""}
                {(this.state.questionNum == 4) ? (<Q4 nextQuestion={this.nextQuestion} 
                                                      correctAnswer={this.answeredCorrectly} 
                                                      currentQuestion={this.state.questionNum }/>) : ""}
                {(this.state.questionNum == 5) ? (<Results toggleNextFunc={this.props.toggleNextFunc} numCorrect={this.state.numCorrect} />) : ""}
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
                    <button type="button" className="btn btn-outline-dark btn-lg" onClick={() => {this.props.nextQuestion(); this.props.toggleNextFunc()}}>Let's Begin!</button>
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
            this.setState({ displayText: "This is the right choice! the app can get your location to get the weather but wont track you all the time." });
        }
        else if (event.target.id == "two") {
            this.setState({ displayText: "Sorry! Wrong Answer... This app will now be able to track your locaiton all the time. They sell your data to creepy ad people :(" });
        } else {
            this.setState({ displayText: "Sorry! Wrong Answer... This will keep you safe, but might be too restrictive" });
        }

        this.setState({ hasSelected: true })
    }

    render() {

        return (
            <div className="location-quiz-container">
                <div className="screenshot-container">
                    <img src="/img/screenshot-1.jpg" />
                </div>


                    {!this.state.hasSelected ? (
                        <div className="text">
                            <div className="progress-counter'">
                                <p>Progress: {this.props.currentQuestion} of 4</p>
                            </div>
                            <h2>Please Select The Option to Share Your Location</h2>
                            <p>
                                This is an example screenshot of how a phone application will ask for your location.
                                This is the weather channel, so it may be in your best interest to allow the app
                                to track your location. But you do may not want to let the app track your location application
                                at all times.
                            </p>
                            <h2>Do you?</h2>
                            <div className="buttons-container">
                            
                                    <Button id="one" className="button" variant="outline-primary" onClick={(event) => {this.showBox(event); this.props.correctAnswer()}}>Allow While Using App</Button>
                    
                                    <Button id="two" className="button" variant="outline-primary" onClick={this.showBox}>Always Allow</Button> 
                       
                                    <Button id="three" className="button" variant="outline-primary" onClick={this.showBox}>Don't Allow</Button> 
                            </div>
                        </div>
                    ) : (
                        
                        <div className="reveal-container">
                            <h1> How did you do?</h1>
                            <p>{this.state.displayText}</p>
                            <button id="next-question" className="btn btn-outline-dark" onClick={this.props.nextQuestion}>
                                Next Question
                            </button>
                        </div>

                        )
                    }
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
            this.setState({ displayText: "Sorry! Wrong Answer... Since Waze is a driving app, it does not need access to an exercising app."});
        } else {
            this.setState({ displayText: "Correct! Giving Waze access to other apps that it is not related to puts your information at risk of being taken." });
        }

        this.setState({ hasSelected: 'true' })

    }


    render() {

        return (
            <div className="location-quiz-container">
                <div className="screenshot-container">
                    <img src="/img/screenshot-2.png" />
                </div>

                    {!this.state.hasSelected ? (
                        <div className="text">
                            <div className="progress-counter'">
                                <p>Progress: {this.props.currentQuestion} of 4</p>
                            </div>
                            <h2>Please Select The Option to Share Your Location</h2>
                            <p>
                                In this example, Waze, a driving navigation map, is asking you to give
                                access to your Motion and Fitness activity. What do you choose? 
                            </p>
                            <h2>Do you?</h2>
                            <div className="buttons-container">
        
                                    <Button id="one" className="button" variant="outline-primary" onClick={this.showBox}>Allow</Button>
                        
                                    <Button id="two" className="button" variant="outline-primary" onClick={(event) => {this.showBox(event); this.props.correctAnswer()}}>Don't Allow</Button>
                            </div>
                        </div>
                    ) : (
                        <div className="reveal-container">
                            <h1> How did you do?</h1>
                            <p>{this.state.displayText}</p>
                            <button id="next-question" className="btn btn-outline-dark" onClick={this.props.nextQuestion}>
                                Next Question
                            </button>
                        </div>

                        )
                    }
            </div>
        )
    }
}

class Q3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayText: "",
            hasSelected: false
        }
    }

    showBox = (event) => {

        if (event.target.id == "one") {
            this.setState({ displayText: "This is a risky choice that could be damaging! There are a variety of dangers underneath accepting all terms through 'ok'."});
        } else {
            this.setState({ displayText: "This is the correct choice! In this case you have very little information on what the app is gaining access too so it's a good idea to find out more!" });
        } 

        this.setState({ hasSelected: 'true' })

    }

    render() {
        let mainImage;       
        if(this.state.hasSelected) {
            mainImage = <img src='/img/angry_birds_terms.png'/>
                        
        } else {
            mainImage = <div className="angry-birds-pic">
                            <img src='/img/angry_birds.png'/>
                        </div>
        }

        return (
            <div className="location-quiz-container">
                <div className="screenshot-container">
                    {mainImage}
                </div>
                    {!this.state.hasSelected ? (
                        <div className="text">
                            <div className="progress-counter'">
                                <p>Progress: {this.props.currentQuestion} of 4</p>
                            </div>
                            <h2>Please Select The Option to Share Your Location</h2>
                            <p>
                                This is an example of choice that you experience often with games. Notice how in this instance instead of individually accepting different terms all your data rights are lumped together. What's the best choice?
                            </p>
                            <h2>Accept or View The Terms?</h2>
                            <div className="buttons-container">
             
                                    <Button id="one" className="button" variant="outline-primary" onClick={this.showBox}>Ok</Button>
                            
                                    <Button id="two" className="button" variant="outline-primary" onClick={(event) => {this.showBox(event); this.props.correctAnswer()}}>Terms</Button>
                            </div>
                        </div>
                    ) : (
                        <div className="reveal-container">
                            <h1> How did you do?</h1>
                            <p>{this.state.displayText}</p>
                            <button id="next-question" className="btn btn-outline-dark" onClick={this.props.nextQuestion}>
                                Next Question
                            </button>
                        </div>
                        )
                    }
                </div>
        )
    }
}

class Q4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayText: "",
            hasSelected: false,
        }
    }
    

    showBox = (event) => {

        if (event.target.id == "one") {
            this.setState({ displayText: "This question has no official answer. Facebook Messenger is asking to share your phone contacts for the use of its app. The benefit to doing this is you can be able to easily message your friends. But the downside is that extra data could be pulled out -- such as storing phone logs, an incident that has happened in the past. "});
        } else {
            this.setState({ displayText: "This question has no official answer. Facebook Messenger is asking to share your phone contacts for the use of its app. The benefit to doing this is you can be able to easily message your friends. But the downside is that extra data could be pulled out -- such as storing phone logs, an incident that has happened in the past. " });
        }

        this.setState({ hasSelected: 'true' })

    }


    render() {

        return (
            <div className="location-quiz-container">
                <div className="screenshot-container">
                    <img src="/img/screenshot-4.png" />
                </div>

                    {!this.state.hasSelected ? (
                        <div className="text">
                            <div className="progress-counter'">
                                <p>Progress: {this.props.currentQuestion} of 4</p>
                            </div>
                            <h2>Please Select The Option to Share Your Location</h2>
                            <p>
                                This is Facebook Messenger. They are requesting access to your phone contacts. Which option would you pick?
                            </p>
                            <h2>Do you?</h2>
                            <div className="buttons-container">
                                    <Button id="one" className="button" variant="outline-primary" onClick={(event) => {this.showBox(event); this.props.correctAnswer()}}>Turn On Contacts</Button>
                        
                                    <Button id="two" className="button" variant="outline-primary" onClick={(event) => {this.showBox(event); this.props.correctAnswer()}}>Not Now</Button>
                            </div>
                        </div>
                    ) : (
                        <div className="reveal-container">
                            <h1> How did you do?</h1>
                            <p>{this.state.displayText}</p>
                            <button id="next-question" className="btn btn-outline-dark" onClick={this.props.nextQuestion}>
                                Next Question
                            </button>
                        </div>

                        )
                    }
            </div>
        )
    }
}

class Results extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayText: "",
            hasSelected: false
        }
    }

    render() {
        this.props.toggleNextFunc();
        return (
            <div className="results-container">
                <h1>Results:</h1>
                <p>
                    You got {this.props.numCorrect} right!
                </p>
            </div>
        )
    }
}

export default LocationQuiz;