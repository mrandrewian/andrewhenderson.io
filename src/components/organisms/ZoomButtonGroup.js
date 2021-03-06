import React, { Component } from "react";
import { Row } from "react-bootstrap";
import ZoomButton from "../molecules/ZoomButton";

class ZoomButtons extends Component {
  render() {
    const count = this.props.buttonContent.length;
    return (
      <div className="zoom-buttons mt-4">
        <Row noGutters>
          {this.props.buttonContent.map((button, index) => (
            <ZoomButton
              key={index}
              count={count}
              imageSrc={button.image}
              overlayImageSrc={button.overlayImage}
              title={button.title}
              text={button.text}
              button={button.button}
              buttonLink={button.buttonLink}
              buttonTarget={button.buttonTarget}
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default ZoomButtons;
