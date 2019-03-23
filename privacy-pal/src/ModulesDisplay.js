import React, { Component } from 'react';
import './.scss/ModulesDisplay.scss';
import { database } from 'firebase';

const ImageSlide = ({ url, _id }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };
  
    return (
      <div id={`card-${_id}`} className="image-slide" style={styles}></div>
    );
}
  
const Arrow = ({ direction, clickFunction, glyph }) => (  
<div
    className={ `slide-arrow ${direction}` }
    onClick={ clickFunction }>
    { glyph }
</div>
);

const imageData = {
    "properties": [
        {
            "_id" : "img-0", 
            "index" : 0, 
            "image" : "/img/nature-photo-1.jpg", 
            "displayText" : "Wow! Look at that!"
        },        
        {
            "_id" : "img-1", 
            "index" : 1, 
            "image" : "/img/nature-photo-2.jpg", 
            "displayText" : "And another one!"
        },
        {
            "_id" : "img-2", 
            "index" : 2, 
            "image" : "/img/nature-photo-3.jpg", 
            "displayText" : "So many cool pics!"
        },
        {
            "_id" : "img-3", 
            "index" : 3, 
            "image" : "/img/nature-photo-4.jpg", 
            "displayText" : "And one more for good measure!"
        }
    ]
} 


class Slider extends Component {

    constructor (props) {
        super(props);

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);

        this.state = {
            imageProperties: imageData.properties,
            currentImage: imageData.properties[0]
        };
    }

    previousSlide () {
        if(this.state.currentImage.index === 0) {
            return this.setState({
                currentImage: imageData.properties[this.state.imageProperties.length - 1]
            })
        }

        const newIndex = this.state.currentImage.index-1
        this.setState({
            currentImage: imageData.properties[newIndex]
        });

    }

    nextSlide = () => {
        if(this.state.currentImage.index === this.state.imageProperties.length - 1) {
            return this.setState({
                currentImage: imageData.properties[0]            
            })
        }

        const newIndex = this.state.currentImage.index+1;
        this.setState({
            currentImage: imageData.properties[newIndex]
        });

    }

    render() {
        const {imageProperties, currentImage} = this.state;
        return (
            <div className="module-display-container">
                {/* Puts all Slides on the same page */}
                <div className={`slider active-slide-${currentImage.index}`}>
                    {/* Aligns all cards next to each other */}
                    <div className="slider-wrapper"
                        style={{
                            'transform': `translateX(-${currentImage.index*(100/imageProperties.length)}%)`,
                        }}     
                    >
                        {
                            imageProperties.map(currentImage => <ImageSlide key={currentImage._id} url={currentImage.image} _id={currentImage._id} />)
                        }
                    </div>

                    <Arrow  direction="left"
                            clickFunction={ this.previousSlide }
                            glyph="&#9664;" />

                    <Arrow  direction="right"
                            clickFunction={ this.nextSlide }
                            glyph="&#9654;" />
                </div>

                <div className="module-text">
                    {this.state.currentImage.displayText}
                </div>
            </div>
        );
    }
}

export default Slider;