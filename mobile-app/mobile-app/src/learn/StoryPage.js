import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Stories from '../stories/dist'

export class StoryPage extends Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();

        this.state = {
            storyIsFinished: false
        }
    }

    test = () => {
        this.ref.current.pause(true);
    }

    play = () => {
        console.log(this.ref.current.next());
    }

    storyHasBeenUpdated = () => {
        if (this.ref.current.isLastStory()) {
            this.setState({
                storyIsFinished: true
            });
            localStorage.setItem(this.props.storyName,"true");
        }
        
    }

    tester = () => {
        console.log(this.ref.current.getCurrentID());
    }

    sendHome = () => {
        this.setState({
            storyIsFinished: true
        });
    }

    render() {

        return (
            <div>
                <div className="story-toolbar"> <img onClick={this.sendHome} id="home-button" src="img/home.svg"/>   </div>
                {!this.state.storyIsFinished ? (
                    <Stories
                        defaultInterval={4000}
                        stories={this.props.stories}
                        width={window.innerWidth}
                        height={window.innerHeight - 75}
                        ref={this.ref}
                        usf={this.storyHasBeenUpdated}
                        onClick={this.tester}
                    />) : (
                        <Route>
                            <Redirect to="/Discover" />
                        </Route>
                    )}

            </div>
        );
    }
}

