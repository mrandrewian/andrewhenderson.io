import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";

import "./ZoomButton.scss";

class ZoomButton extends Component {
  render() {
    return (
      <Col md={12 / this.props.count}>
        <div className="img-container">
          <img
            className="img"
            src={this.props.imageSrc}
            alt={this.props.title}
          />
          <div className="img-popover d-flex align-items-center">
            {this.props.overlayImageSrc ? (
              <img
                className="img"
                src={this.props.overlayImageSrc}
                alt={this.props.title}
              />
            ) : (
              <Card className="w-75 mx-auto text-dark">
                <Card.Body>
                  <Card.Title>
                    {this.props.title} {this.buttonCount}
                  </Card.Title>
                  <Card.Text>{this.props.text}</Card.Text>
                  <Button
                    href={this.props.buttonLink}
                    target={this.props.buttonTarget}
                    variant="primary"
                  >
                    {this.props.button}
                  </Button>
                </Card.Body>
              </Card>
            )}
          </div>
        </div>
      </Col>
    );
  }
}

export default ZoomButton;
