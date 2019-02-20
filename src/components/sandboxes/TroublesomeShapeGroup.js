import React, { Component } from "react";
import { Row, Col, Card, Button, Collapse } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/styles/prism";
import Heptagram from "./Heptagram";
import SpringHeptagram from "./SpringHeptagram";
import PenroseTriangle from "./PenroseTriangle";
import Polygon from "./Polygon";
import "../../styles/Heptagram.scss";
import "../../styles/PenroseTriangle.scss";
import "../../styles/Polygon.scss";

class Polygons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    const { open } = this.state;
    const codeString = `
    .animated-heptogram {
      polyline {
        fill: none;
        stroke: blue;
        stroke-width: 2;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-name: spin;
      }
    
      polyline.l1 {
        stroke: var(--red);
        animation-duration: 21s;
      }
    
      polyline.l2 {
        stroke: var(--yellow);
        animation-duration: 22s;
      }
    
      polyline.l3 {
        stroke: var(--cyan);
        animation-duration: 23s;
      }
    
      polyline.l4 {
        stroke: var(--blue);
        animation-duration: 24s;
      }
    
      polyline.l5 {
        stroke: var(--red);
        animation-duration: 21s;
      }
    
      polyline.l6 {
        stroke: var(--yellow);
        animation-duration: 22s;
      }
    }    

    .penrose-triangle {
      polygon.left {
        fill: yellow;
        stroke: red;
      }
    
      polygon.left-inside {
        fill: yellow;
        stroke: red;
      }
    
      polygon.bottom-top {
        fill: blue;
        stroke: red;
      }
    
      polygon.bottom-bottom {
        fill: blue;
        stroke: red;
      }
    
      polygon.right-inside {
        fill: green;
        stroke: red;
      }
    
      polygon.right {
        fill: green;
        stroke: red;
      }
    }    
    `;
    return (
      <Col sm={12} className="my-3">
        <div className="sand-box rounded">
          <Card className="text-dark">
            <div className="troublesome-shapes">
              <Row className="no-gutters">
                <Col lg={4}>
                  <Heptagram />
                </Col>
                <Col lg={4}>
                  <PenroseTriangle />
                </Col>
                <Col lg={4}>
                  <SpringHeptagram />
                </Col>
                <Col lg={4}>
                  <Polygon />
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
