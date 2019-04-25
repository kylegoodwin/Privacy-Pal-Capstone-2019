import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Stories from './stories/dist';
//import { SeeMore } from './SeeMore';

export class CardOne extends Component {

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
        /*
        let zoink = this.ref.current.next();
        console.log(zoink);
        */
        console.log(this.ref.current.next());
    }

    storyHasBeenUpdated = () => {
        console.log("update")
        if (this.ref.current.isLastStory()) {
            console.log("last story")
            this.setState({
                storyIsFinished: true

            });
        }

    }



    tester = () => {
        console.log(this.ref.current.getCurrentID());
    }

    render() {
        //let stories = [{ url: 'https://picsum.photos/1080/1920', seeMore: <SeeMore />, header: { heading: 'Mohit Karekar', subheading: 'Posted 5h ago', profileImage: 'https://picsum.photos/1000/1000' } }, { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } }, { url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', header: { heading: 'mohitk05/react-insta-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' } }, { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video', duration: 1000 }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', type: 'video', seeMore: <SeeMore /> }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video' }, { url: 'https://picsum.photos/1080/1920', seeMore: <SeeMore />, header: { heading: 'Mohit Karekar', subheading: 'Posted 5h ago', profileImage: 'https://picsum.photos/1000/1000' },isLastStory: true }]
        let stories = [{url:"img/quiz-one/one.jpg",topText:"Hello world",bottomText:"Hopefully this works"},
        {url:"img/quiz-one/two.jpg",topText:"Stop using your phone dummy",bottomText:"Phones are DEEEK"},
        {url:"img/quiz-one/three.jpg",topText:"Wow",bottomText:"You use your phone too much son"},
           "img/quiz-one/four.jpg",
            "img/quiz-one/five.jpg",
             { url: "img/quiz-one/three.jpg"}]


        return (
            <div>

                <div className="toolbar" > <button onClick={this.test}> Pause</button><button onClick={this.play}> Play</button> </div>

                {!this.state.storyIsFinished ? (
                    <Stories
                        defaultInterval={4000}
                        stories={stories}
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