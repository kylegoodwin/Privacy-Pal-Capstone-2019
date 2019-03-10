import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './LocationQuiz.scss';

class LocationQuiz extends Component {
    
    constructor(props) {
        super(props);
            
        this.state = {
          tabNum: 1,
          displayText: "",
          hasSelected: false
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


      showBox = (event) => {

        if( event.target.id == "one"){
           this.setState({ displayText: "This is the right choice! the app can get your location to get the weather but wont track you all the time."}); 
        }else if( event.target.id == "two"){
            this.setState({ displayText: "This app will now be able to track your locaiton all the time. They sell your data to creepy ad people :("}); 
        }else{
            this.setState({ displayText: "This will keep you safe, but might be too restrictive"}); 
        }

        this.setState({hasSelected: true})
        
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

            {!this.state.hasSelected? (
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
                </div>

            )
    }
                </div>
            </div>
      );
}
}
  
  export default LocationQuiz;