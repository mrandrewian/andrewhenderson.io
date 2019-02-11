import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/ShapeStudy.scss';

class SandBox extends Component {
  render() {
    return (
      <Row>
        <Col className="my-5" >
          <h1>Sandbox</h1>
          <div className="sand-box rounded">
            <div class="star-12">
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

export default SandBox;