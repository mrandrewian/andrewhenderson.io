import React, { Component } from "react";
import { Col, Card, Button, Collapse } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/styles/prism";
import "../../styles/Star.scss";

class Stars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    const { open } = this.state;
    const codeString = `
    .star-12 {
      position: relative;
      width: 60px;
      height: 60px;
      background: rgba(102, 16, 242, 0.3);
      transform: rotate(-20deg);
      animation: spin 5s linear infinite;
    
      &:before {
        content: "";
        position: absolute;
        width: 60px;
        height: 60px;
        background: rgba(102, 16, 242, 0.5);
        transform: rotate(-30deg);
      }
      &:after {
        content: "";
        position: absolute;
        width: 60px;
        height: 60px;
        background: rgba(102, 16, 242, 0.7);
        transform: rotate(-60deg);
      }
    }
    
    @-moz-keyframes spin {
      100% {
        -moz-transform: rotate(340deg);
      }
    }
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(340deg);
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(340deg);
        transform: rotate(340deg);
      }
    }    
    `;
    return (
      <Col sm={12} className="my-3">
        <div className="sand-box rounded">
          <Card className="text-dark">
            <div className="star-12 mx-auto mt-5 mb-4" />
            <Card.Body>
              <Card.Title>Spinning 12pt Star</Card.Title>
              <Card.Text>
                Using css animations and overlapping psuedo element styling you
                can easily achieve this "usefull" little star.
              </Card.Text>
              {/* <Button
                onClick={() => this.setState({ open: !open })}
                aria-controls="show-code1"
                aria-expanded={open}
                className="btn btn-primary"
              >
                Show Code
              </Button> */}
            </Card.Body>
          </Card>
          <Collapse in={this.state.open}>
            <Card className="show-code clearfix p-0">
              <Card.Body className="p-0" id="show-code1">
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

export default Stars;
