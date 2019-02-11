import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import '../styles/ShapeStudy.scss';

class SandBox extends Component {
  render() {
    return (
      <Row>
        <Col className="my-5" >
          <h1>Sandbox</h1>
          <div className="sand-box rounded">
            <Card className="text-dark" style={{ width: '18rem' }}>
              <div class="star-12 mx-auto mt-5 mb-4" />
              <Card.Body>
                <Card.Title>Spinning 12pt Star</Card.Title>
                <Card.Text>
                  Using css animations and overlapping psuedo element styling you can easily achieve this "usefull" little star.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    )
  }
}

export default SandBox;