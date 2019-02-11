import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../images/photo_roll1.jpg';
import slide2 from '../images/photo_roll2.jpg';
import slide3 from '../images/photo_roll3.jpg';

class PhotoRoll extends Component {
  render() {
    return (
      <Carousel
        controls={false}
        indicators={false}
        interval="2000"
        className="photoRoll"
      >
        <Carousel.Item>
          <img
            className="d-block"
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={slide2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel >
    )
  }
}

export default PhotoRoll;
