import React, { Component } from "react";
import {
  ButtonToolbar,
  Dropdown,
  DropdownButton,
  Button
} from "react-bootstrap";

import "./Polyline.scss";

class Polylines extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layers: this.props.count,
      varient: this.props.varient,
      strokeWidth: this.props.strokeWidth,
      overlay: this.props.overlay
    };
  }

  setLayers = eventKey => {
    this.setState({ layers: eventKey });
  };

  setVarient = eventKey => {
    this.setState({ varient: eventKey });
  };

  setStrokeWidth = eventKey => {
    this.setState({ strokeWidth: eventKey });
  };

  setOverlay = () => {
    let overlay = this.state.overlay ? false : true;
    this.setState({ overlay });
  };

  loopPolylines = layers => {
    let polylines = [];
    for (let i = 0; i < layers; i++) {
      polylines.push(
        <div className={`polyline-layer-container plc${i}`}>
          <svg
            className={`polyline-layer layer${i} stroke-width${
              this.state.strokeWidth
            }`}
            height="200"
            width="200"
          >
            {/* Top Left */}
            <polyline
              className={`tl ${this.state.varient}${i}`}
              points="0,95 95,95 95,0"
            />
            <polyline
              className={`tl ${this.state.varient}${i}`}
              points="0,85 85,85 85,0"
            />
            <polyline
              className={`tl ${this.state.varient}${i}`}
              points="0,75 75,75 75,0"
            />
            <polyline
              className={`tl ${this.state.varient}${i}`}
              points="0,65 65,65 65,0"
            />
            <polyline
              className={`tl ${this.state.varient}${i}`}
              points="0,55 55,55 55,0"
            />
            <polyline
              className={`tl ${this.state.varient}${i}`}
              points="0,45 45,45 45,0"
            />
            <polyline
              className={`tl ${this.state.varient}${i}`}
              points="0,35 35,35 35,0"
            />
            <polyline
              className={`tl ${this.state.varient}${i}`}
              points="0,25 25,25 25,0"
            />
            <polyline
              className={`tl ${this.state.varient}${i}`}
              points="0,15 15,15 15,0"
            />
            <polyline
              className={`tl ${this.state.varient}${i}`}
              points="0,5 5,5 5,0"
            />
            {/* Top Right */}
            <polyline
              className={`tr ${this.state.varient}${i}`}
              points="105,0 105,95 200,95"
            />
            <polyline
              className={`tr ${this.state.varient}${i}`}
              points="115,0 115,85 200,85"
            />
            <polyline
              className={`tr ${this.state.varient}${i}`}
              points="125,0 125,75 200,75"
            />
            <polyline
              className={`tr ${this.state.varient}${i}`}
              points="135,0 135,65 200,65"
            />
            <polyline
              className={`tr ${this.state.varient}${i}`}
              points="145,0 145,55 200,55"
            />
            <polyline
              className={`tr ${this.state.varient}${i}`}
              points="155,0 155,45 200,45"
            />
            <polyline
              className={`tr ${this.state.varient}${i}`}
              points="165,0 165,35 200,35"
            />
            <polyline
              className={`tr ${this.state.varient}${i}`}
              points="175,0 175,25 200,25"
            />
            <polyline
              className={`tr ${this.state.varient}${i}`}
              points="185,0 185,15 200,15"
            />
            <polyline
              className={`tr ${this.state.varient}${i}`}
              points="195,0 195,5 200,5"
            />
            {/* Bottom Left */}
            <polyline
              className={`bl ${this.state.varient}${i}`}
              points="0,105 95,105 95,200"
            />
            <polyline
              className={`bl ${this.state.varient}${i}`}
              points="0,115 85,115 85,200"
            />
            <polyline
              className={`bl ${this.state.varient}${i}`}
              points="0,125 75,125 75,200"
            />
            <polyline
              className={`bl ${this.state.varient}${i}`}
              points="0,135 65,135 65,200"
            />
            <polyline
              className={`bl ${this.state.varient}${i}`}
              points="0,145 55,145 55,200"
            />
            <polyline
              className={`bl ${this.state.varient}${i}`}
              points="0,155 45,155 45,200"
            />
            <polyline
              className={`bl ${this.state.varient}${i}`}
              points="0,165 35,165 35,200"
            />
            <polyline
              className={`bl ${this.state.varient}${i}`}
              points="0,175 25,175 25,200"
            />
            <polyline
              className={`bl ${this.state.varient}${i}`}
              points="0,185 15,185 15,200"
            />
            <polyline
              className={`bl ${this.state.varient}${i}`}
              points="0,195 5,195 5,200"
            />
            {/* Bottom Right */}
            <polyline
              className={`br ${this.state.varient}${i}`}
              points="105,200 105,105 200,105"
            />
            <polyline
              className={`br ${this.state.varient}${i}`}
              points="115,200 115,115 200,115"
            />
            <polyline
              className={`br ${this.state.varient}${i}`}
              points="125,200 125,125 200,125"
            />
            <polyline
              className={`br ${this.state.varient}${i}`}
              points="135,200 135,135 200,135"
            />
            <polyline
              className={`br ${this.state.varient}${i}`}
              points="145,200 145,145 200,145"
            />
            <polyline
              className={`br ${this.state.varient}${i}`}
              points="155,200 155,155 200,155"
            />
            <polyline
              className={`br ${this.state.varient}${i}`}
              points="165,200 165,165 200,165"
            />
            <polyline
              className={`br ${this.state.varient}${i}`}
              points="175,200 175,175 200,175"
            />
            <polyline
              className={`br ${this.state.varient}${i}`}
              points="185,200 185,185 200,185"
            />
            <polyline
              className={`br ${this.state.varient}${i}`}
              points="195,200 195,195 200,195"
            />
          </svg>
        </div>
      );
    }
    return polylines;
  };

  render() {
    return (
      <div className="polyline">
        {this.state.overlay ? <div className="circle-overlay" /> : ""}
        {this.loopPolylines(this.state.layers)}
        <ButtonToolbar className="justify-content-center">
          <DropdownButton
            className="px-2 m-1"
            id="layers-button"
            title="Layers"
          >
            <Dropdown.Item onSelect={this.setLayers} eventKey="1">
              1
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setLayers} eventKey="2">
              2
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setLayers} eventKey="3">
              3
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setLayers} eventKey="4">
              4
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            className="px-2 m-1"
            id="varient-button"
            title="Color Varient"
          >
            <Dropdown.Item onSelect={this.setVarient} eventKey="a">
              A
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setVarient} eventKey="b">
              B
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setVarient} eventKey="c">
              C
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            className="px-2 m-1"
            id="varient-button"
            title="Stroke Width"
          >
            <Dropdown.Item onSelect={this.setStrokeWidth} eventKey="2">
              2
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setStrokeWidth} eventKey="4">
              4
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setStrokeWidth} eventKey="6">
              6
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setStrokeWidth} eventKey="8">
              8
            </Dropdown.Item>
          </DropdownButton>
          <Button className="px-2 m-1" onClick={this.setOverlay}>
            Toggle Overlay
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Polylines;
