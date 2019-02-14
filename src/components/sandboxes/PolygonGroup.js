import React, { Component } from "react";
import { Row, Col, Card, Button, Collapse } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/styles/prism";
import Polygon from "./Polygon";
import "../../styles/Polygon.scss";

class Polygons extends Component {
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

  loopPolygons = layers => {
    let polygons = [];
    for (let i = 0; i < layers; i++) {
      polygons.push(
        <React.Fragment>
          <polygon
            className={`tl ${this.state.varient}${i}`}
            points="-105,-5 -5,-5 -5,-105 -5,-5"
          />
          <polygon
            className={`tl ${this.state.varient}${i}`}
            points="5,-105 5,-5 105,-5 5,-5"
          />
          <polygon
            className={`tl ${this.state.varient}${i}`}
            points="105,5 5,5 5,105 5,5"
          />
          <polygon
            className={`tl ${this.state.varient}${i}`}
            points="-5,105 -5,5 -105,5 -5,5"
          />

          <polygon
            className={`tl1 ${this.state.varient}${i}`}
            points="-105,-15 -15,-15 -15,-105 -15,-15"
          />
          <polygon
            className={`tl1 ${this.state.varient}${i}`}
            points="15,-105 15,-15 105,-15 15,-15"
          />
          <polygon
            className={`tl1 ${this.state.varient}${i}`}
            points="105,15 15,15 15,105 15,15"
          />
          <polygon
            className={`tl1 ${this.state.varient}${i}`}
            points="-15,105 -15,15 -105,15 -15,15"
          />

          <polygon
            className={`tl2 ${this.state.varient}${i}`}
            points="-105,-25 -25,-25 -25,-105 -25,-25"
          />
          <polygon
            className={`tl2 ${this.state.varient}${i}`}
            points="25,-105 25,-25 105,-25 25,-25"
          />
          <polygon
            className={`tl2 ${this.state.varient}${i}`}
            points="105,25 25,25 25,105 25,25"
          />
          <polygon
            className={`tl2 ${this.state.varient}${i}`}
            points="-25,105 -25,25 -105,25 -25,25"
          />

          <polygon
            className={`tl3 ${this.state.varient}${i}`}
            points="-105,-35 -35,-35 -35,-105 -35,-35"
          />
          <polygon
            className={`tl3 ${this.state.varient}${i}`}
            points="35,-105 35,-35 105,-35 35,-35"
          />
          <polygon
            className={`tl3 ${this.state.varient}${i}`}
            points="105,35 35,35 35,105 35,35"
          />
          <polygon
            className={`tl3 ${this.state.varient}${i}`}
            points="-35,105 -35,35 -105,35 -35,35"
          />

          <polygon
            className={`tl4 ${this.state.varient}${i}`}
            points="-105,-45 -45,-45 -45,-105 -45,-45"
          />
          <polygon
            className={`tl4 ${this.state.varient}${i}`}
            points="45,-105 45,-45 105,-45 45,-45"
          />
          <polygon
            className={`tl4 ${this.state.varient}${i}`}
            points="105,45 45,45 45,105 45,45"
          />
          <polygon
            className={`tl4 ${this.state.varient}${i}`}
            points="-45,105 -45,45 -105,45 -45,45"
          />

          <polygon
            className={`tl5 ${this.state.varient}${i}`}
            points="-105,-55 -55,-55 -55,-105 -55,-55"
          />
          <polygon
            className={`tl5 ${this.state.varient}${i}`}
            points="55,-105 55,-55 105,-55 55,-55"
          />
          <polygon
            className={`tl5 ${this.state.varient}${i}`}
            points="105,55 55,55 55,105 55,55"
          />
          <polygon
            className={`tl5 ${this.state.varient}${i}`}
            points="-55,105 -55,55 -105,55 -55,55"
          />

          <polygon
            className={`tl6 ${this.state.varient}${i}`}
            points="-105,-65 -65,-65 -65,-105 -65,-65"
          />
          <polygon
            className={`tl6 ${this.state.varient}${i}`}
            points="65,-105 65,-65 105,-65 65,-65"
          />
          <polygon
            className={`tl6 ${this.state.varient}${i}`}
            points="105,65 65,65 65,105 65,65"
          />
          <polygon
            className={`tl6 ${this.state.varient}${i}`}
            points="-65,105 -65,65 -105,65 -65,65"
          />

          <polygon
            className={`tl7 ${this.state.varient}${i}`}
            points="-105,-75 -75,-75 -75,-105 -75,-75"
          />
          <polygon
            className={`tl7 ${this.state.varient}${i}`}
            points="75,-105 75,-75 105,-75 75,-75"
          />
          <polygon
            className={`tl7 ${this.state.varient}${i}`}
            points="105,75 75,75 75,105 75,75"
          />
          <polygon
            className={`tl7 ${this.state.varient}${i}`}
            points="-75,105 -75,75 -105,75 -75,75"
          />

          <polygon
            className={`tl8 ${this.state.varient}${i}`}
            points="-105,-85 -85,-85 -85,-105 -85,-85"
          />
          <polygon
            className={`tl8 ${this.state.varient}${i}`}
            points="85,-105 85,-85 105,-85 85,-85"
          />
          <polygon
            className={`tl8 ${this.state.varient}${i}`}
            points="105,85 85,85 85,105 85,85"
          />
          <polygon
            className={`tl8 ${this.state.varient}${i}`}
            points="-85,105 -85,85 -105,85 -85,85"
          />

          <polygon
            className={`tl9 ${this.state.varient}${i}`}
            points="-105,-95 -95,-95 -95,-105 -95,-95"
          />
          <polygon
            className={`tl9 ${this.state.varient}${i}`}
            points="95,-105 95,-95 105,-95 95,-95"
          />
          <polygon
            className={`tl9 ${this.state.varient}${i}`}
            points="105,95 95,95 95,105 95,95"
          />
          <polygon
            className={`tl9 ${this.state.varient}${i}`}
            points="-95,105 -95,95 -105,95 -95,95"
          />
        </React.Fragment>
      );
    }
    return polygons;
  };

  render() {
    const { open } = this.state;
    const codeString = `
    .polygon {
      polygon {
        stroke-width: 3;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-name: spin;
      }
    
      polygon.a0 {
        stroke: var(--red);
        animation-duration: 21s;
      }
    
      polygon.a1 {
        stroke: var(--yellow);
        animation-duration: 22s;
      }
    
      polygon.a2 {
        stroke: var(--cyan);
        animation-duration: 23s;
      }
    
      polygon.a3 {
        stroke: var(--blue);
        animation-duration: 24s;
      }
    
      polygon.b0 {
        stroke: var(--pink);
        animation-duration: 21s;
      }
    
      polygon.b1 {
        stroke: var(--yellow);
        animation-duration: 22s;
      }
    
      polygon.b2 {
        stroke: var(--cyan);
        animation-duration: 23s;
      }
    
      polygon.b3 {
        stroke: var(--indigo);
        animation-duration: 24s;
      }
    
      polygon.c0 {
        stroke: var(--orange);
        animation-duration: 21s;
      }
    
      polygon.c1 {
        stroke: var(--teal);
        animation-duration: 22s;
      }
    
      polygon.c2 {
        stroke: var(--red);
        animation-duration: 23s;
      }
    
      polygon.c3 {
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
            <div className="polygon-group mx-auto w-100">
              <Row className="no-gutters">
                <Col sm={4}>
                  <Polygon varient="a" count="2" />
                </Col>
                <Col sm={4}>
                  <Polygon varient="b" count="3" />
                </Col>
                <Col sm={4}>
                  <Polygon varient="c" count="4" />
                </Col>
              </Row>
            </div>
            <Card.Body>
              <Card.Title>Overlapping Animated Polygons</Card.Title>
              <Card.Text>
                This is what happens when you start messing with stuff just for
                the heck of it.
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

export default Polygons;
