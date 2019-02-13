import React, { Component } from 'react';
import { Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/styles/prism';
import Polygons from './Polygons'
import Heptagram from './Heptagram'
import PenroseTriangle from './PenroseTriangle'
import '../styles/ShapeStudy.scss';

class SandBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    const codeString = `
      .star-12 {
        position: relative;
        width: 60px;
        height: 60px;
        background: rgba(102,16,242,.25);
        transform: rotate(-20deg);
        animation: spin 5s linear infinite;
        
        &:before {
          content: '';
          position: absolute;
          width: 60px;
          height: 60px;
          background: rgba(102,16,242,.5);
          transform: rotate(-30deg);
        }
        &:after {
          content: '';
          position: absolute;
          width: 60px;
          height: 60px;
          background: rgba(102,16,242,.5);
          transform: rotate(-60deg);
        }
      }

      @-moz-keyframes spin { 100% { -moz-transform: rotate(340deg); } }
      @-webkit-keyframes spin { 100% { -webkit-transform: rotate(340deg); } }
      @keyframes spin { 100% { -webkit-transform: rotate(340deg); transform:rotate(340deg); } }
    `;
    return (
      <Row>
        <Col sm={12} className="my-3" >
          <h1>CSS Sandbox</h1>
          <div className="sand-box rounded">
            <Card className="text-dark">
              <div className="star-12 mx-auto mt-5 mb-4" />
              <Card.Body>
                <Card.Title>Spinning 12pt Star</Card.Title>
                <Card.Text>
                  Using css animations and overlapping psuedo element styling you can easily achieve this "usefull" little star.
                </Card.Text>
                <Button
                  onClick={() => this.setState({ open: !open })}
                  aria-controls="show-code1"
                  aria-expanded={open}
                  className="btn btn-primary"
                >
                  Show Code
                </Button>
              </Card.Body>
            </Card>
            <Collapse in={this.state.open}>
              <Card className="show-code clearfix p-0">
                <Card.Body className="p-0" id="show-code1">
                  <Card.Text>
                    <SyntaxHighlighter language='scss' style={atomDark}>{codeString}</SyntaxHighlighter>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Collapse>
          </div>
        </Col>
        <Col sm={12} className="my-3" >
          <div className="sand-box rounded">
            <Card className="text-dark">
              <div className="polygons mx-auto w-100">
                <Row className="no-gutters">
                  <Col sm={4}>
                    <Polygons
                      varient="a"
                      count="2"
                    />
                  </Col>
                  <Col sm={4}>
                    <Polygons
                      varient="b"
                      count="3"
                    />
                  </Col>
                  <Col sm={4}>
                    <Polygons
                      varient="c"
                      count="4"
                    />
                  </Col>
                </Row>
              </div>
              <Card.Body>
                <Card.Title>Overlapping Animated Polygons</Card.Title>
                <Card.Text>
                  This is what happens when you start messing with stuff just for the heck of it.
                </Card.Text>
                <Button
                  onClick={() => this.setState({ open: !open })}
                  aria-controls="show-code2"
                  aria-expanded={open}
                  className="btn btn-primary"
                >
                  Show Code
                </Button>
              </Card.Body>
            </Card>
            <Collapse in={this.state.open}>
              <Card className="show-code p-0">
                <Card.Body className="p-0" id="show-code3">
                  <Card.Text>
                    <SyntaxHighlighter language='scss' style={atomDark}>{codeString}</SyntaxHighlighter>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Collapse>
          </div>
        </Col>
        <Col sm={12} className="my-3">
          <div className="sand-box rounded">
            <Card className="text-dark">
              <div className="heptagram">
                <Row className="no-gutters">
                  <Col sm={4}>
                    <Heptagram />
                  </Col>
                  <Col sm={4}>
                    <PenroseTriangle />
                  </Col>
                  <Col sm={4}>
                    <Heptagram />
                  </Col>
                </Row>
              </div>
              <Card.Body>
                <Card.Title>Troublesome Shapes</Card.Title>
                <Card.Text>
                  This shapes will make your brain feel fuzzy.
                </Card.Text>
                <Button
                  onClick={() => this.setState({ open: !open })}
                  aria-controls="show-code3"
                  aria-expanded={open}
                  className="btn btn-primary"
                >
                  Show Code
                </Button>
              </Card.Body>
            </Card>
            <Collapse in={this.state.open}>
              <Card className="show-code p-0">
                <Card.Body className="p-0" id="show-code3">
                  <Card.Text>
                    <SyntaxHighlighter language='scss' style={atomDark}>{codeString}</SyntaxHighlighter>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Collapse>
          </div>
        </Col>
      </Row>
    )
  }
}

export default SandBox;