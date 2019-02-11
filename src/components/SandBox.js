import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/styles/prism';
import '../styles/ShapeStudy.scss';

class SandBox extends Component {

  state = { collapseID: "", collapse: "collapse" }
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
      collapse: prevState.collapseID !== collapseID ? "" : "collapse"
    }));
  }

  render() {
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
        <Col className="my-5" >
          <h1>Sandbox</h1>
          <div className="sand-box rounded">
            <Card className="text-dark" style={{ width: '18rem' }}>
              <div className="star-12 mx-auto mt-5 mb-4" />
              <Card.Body>
                <Card.Title>Spinning 12pt Star</Card.Title>
                <Card.Text>
                  Using css animations and overlapping psuedo element styling you can easily achieve this "usefull" little star.
                </Card.Text>
                <Button onClick={this.toggleCollapse("show-code1")} className="btn btn-primary">
                  Show Code
                </Button>
                <Card.Body className={`p-0 ${this.state.collapse}`} id="show-code1">
                  <Card.Text>
                    <SyntaxHighlighter language='scss' style={atomDark}>{codeString}</SyntaxHighlighter>
                  </Card.Text>
                </Card.Body>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    )
  }
}

export default SandBox;