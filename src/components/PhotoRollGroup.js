import React, { Component } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import PhotoRoll from './PhotoRoll';
import slide1 from '../images/photo_roll1.jpg';
import slide2 from '../images/photo_roll2.jpg';
import slide3 from '../images/photo_roll3.jpg';

class PhotoRollGroup extends Component {
  render() {
    return (
      <Row noGutters>
        <Col md={4}>
          <Carousel
            controls={false}
            indicators={false}
            interval="2000"
            className="photoRoll span4"
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
        </Col>
      </Row>
    )
  }
}

export default PhotoRollGroup;
