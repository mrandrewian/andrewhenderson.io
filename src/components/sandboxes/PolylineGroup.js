import React, { Component } from "react";
import { Row, Col, Card, Button, Collapse } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/styles/prism";
import Polyline from "./Polyline";
import "../../styles/Polyline.scss";

class Polylines extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layers: this.props.count,
      varient: this.props.varient,
      open: false
    };
  }

  setLayers = eventKey => {
    this.setState({ layers: eventKey });
  };

  setVarient = eventKey => {
    this.setState({ varient: eventKey });
  };

  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  render() {
    const { open } = this.state;
    const codeString = `
    .polyline {
      polyline {
        stroke-width: 3;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-name: spin;
      }
    
      polyline.a0 {
        stroke: var(--red);
        animation-duration: 21s;
      }
    
      polyline.a1 {
        stroke: var(--yellow);
        animation-duration: 22s;
      }
    
      polyline.a2 {
        stroke: var(--cyan);
        animation-duration: 23s;
      }
    
      polyline.a3 {
        stroke: var(--blue);
        animation-duration: 24s;
      }
    
      polyline.b0 {
        stroke: var(--pink);
        animation-duration: 21s;
      }
    
      polyline.b1 {
        stroke: var(--yellow);
        animation-duration: 22s;
      }
    
      polyline.b2 {
        stroke: var(--cyan);
        animation-duration: 23s;
      }
    
      polyline.b3 {
        stroke: var(--indigo);
        animation-duration: 24s;
      }
    
      polyline.c0 {
        stroke: var(--orange);
        animation-duration: 21s;
      }
    
      polyline.c1 {
        stroke: var(--teal);
        animation-duration: 22s;
      }
    
      polyline.c2 {
        stroke: var(--red);
        animation-duration: 23s;
      }
    
      polyline.c3 {
        stroke: var(--cyan);
        animation-duration: 24s;
      }
    
      @-moz-keyframes spin {
        from {
          -moz-transform: rotate(0deg) scaleY(1.5);
        }
        to {
          -moz-transform: rotate(359deg) scaleY(1.5);
        }
      }
      @-webkit-keyframes spin {
        from {
          -webkit-transform: rotate(0deg) scaleY(1.5);
        }
        to {
          -webkit-transform: rotate(359deg scaleY(1.5));
        }
      }
      @keyframes spin {
        from {
          transform: rotate(0deg) scaleY(1.5);
        }
        to {
          transform: rotate(359deg) scaleY(1.5);
        }
      }
    }       
    `;
    return (
      <Col sm={12} className="my-3">
        <div className="sand-box rounded">
          <Card className="text-dark">
            <div className="polyline-group mx-auto w-100">
              <Row className="no-gutters">
                <Col lg={4}>
                  <Polyline
                    varient="a"
                    count="2"
                    strokeWidth="4"
                    overlay={false}
                  />
                </Col>
                <Col lg={4}>
                  <Polyline
                    varient="b"
                    count="3"
                    strokeWidth="4"
                    overlay={true}
                  />
                </Col>
                <Col lg={4}>
                  <Polyline
                    varient="c"
                    count="4"
                    strokeWidth="4"
                    overlay={false}
                  />
                </Col>
              </Row>
            </div>
            <Card.Body>
              <Card.Title>Overlapping Animated Polylines</Card.Title>
              <Card.Text>
                This is what happens when you start messing with stuff just for
                the heck of it.
              </Card.Text>
              {/* <Button
                onClick={() => this.setState({ open: !open })}
                aria-controls="show-code2"
                aria-expanded={open}
                className="btn btn-primary"
              >
                Show Code
              </Button> */}
            </Card.Body>
          </Card>
          <Collapse in={this.state.open}>
            <Card className="show-code p-0">
              <Card.Body className="p-0" id="show-code3">
                <Card.Text>
                  <SyntaxHighlighter language="scss" style={atomDark}>
                    {codeString}
                  </SyntaxHighlighter>
                </Card.Text>
              </Card.Body>
            </Card>
          </Collapse>
        </div>
      </Col>
    );
  }
}

export default Polylines;
