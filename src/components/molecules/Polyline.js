import React, { Component } from "react";
import {
  ButtonToolbar,
  Dropdown,
  DropdownButton,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
import Svg from "../atoms/Svg";
import Polyline from "../atoms/Polyline";

import "./Polyline.scss";

class Polylines extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layers: this.props.count,
      varient: this.props.varient,
      strokeWidth: this.props.strokeWidth,
      opacity: this.props.opacity,
      overlay: this.props.overlay.props,
      pathsArray: [
        "0,95 95,95 95,0",
        "0,85 85,85 85,0",
        "0,75 75,75 75,0",
        "0,65 65,65 65,0",
        "0,55 55,55 55,0",
        "0,45 45,45 45,0",
        "0,35 35,35 35,0",
        "0,25 25,25 25,0",
        "0,15 15,15 15,0",
        "0,5 5,5 5,0",
        "105,0 105,95 200,95",
        "115,0 115,85 200,85",
        "125,0 125,75 200,75",
        "135,0 135,65 200,65",
        "145,0 145,55 200,55",
        "155,0 155,45 200,45",
        "165,0 165,35 200,35",
        "175,0 175,25 200,25",
        "185,0 185,15 200,15",
        "195,0 195,5 200,5",
        "0,105 95,105 95,200",
        "0,115 85,115 85,200",
        "0,125 75,125 75,200",
        "0,135 65,135 65,200",
        "0,145 55,145 55,200",
        "0,155 45,155 45,200",
        "0,165 35,165 35,200",
        "0,175 25,175 25,200",
        "0,185 15,185 15,200",
        "0,195 5,195 5,200",
        "105,200 105,105 200,105",
        "115,200 115,115 200,115",
        "125,200 125,125 200,125",
        "135,200 135,135 200,135",
        "145,200 145,145 200,145",
        "155,200 155,155 200,155",
        "165,200 165,165 200,165",
        "175,200 175,175 200,175",
        "185,200 185,185 200,185",
        "195,200 195,,195 200,195"
      ]
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

  setOpacity = eventKey => {
    this.setState({ opacity: eventKey });
  };

  setOverlay = value => {
    this.setState({ overlay: value });
  };

  loopSvgs = layers => {
    let svgs = [];
    for (let i = 0; i < layers; i++) {
      svgs.push(
        <div className={`polyline-layer-container plc${i}`}>
          <Svg
            className={`
              layer${i}
              polyline-layer
              opacity${this.state.opacity}  
              stroke-width${this.state.strokeWidth}
            `}
            height="200"
            width="200"
          >
            {this.loopPolylines(i)}
          </Svg>
        </div>
      );
    }
    return svgs;
  };

  loopPolylines = count => {
    let paths = [];
    for (let i = 0; i < this.state.pathsArray.length; i++) {
      paths.push(
        <Polyline
          className={`${this.state.varient}${count}`}
          points={this.state.pathsArray[i]}
        />
      );
    }
    return paths;
  };

  render() {
    return (
      <div className="polyline">
        <div className={this.state.overlay} />
        {this.loopSvgs(this.state.layers, this.state.pathsArray)}
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
          <DropdownButton
            className="px-2 m-1"
            id="varient-button"
            title="Opacity"
          >
            <Dropdown.Item onSelect={this.setOpacity} eventKey="4">
              .4
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setOpacity} eventKey="6">
              .6
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setOpacity} eventKey="8">
              .8
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setOpacity} eventKey="1">
              1
            </Dropdown.Item>
          </DropdownButton>
          <ToggleButtonGroup
            name="overlays"
            type="radio"
            defaultValue={this.state.overlay}
            value={this.state.value}
            onChange={this.setOverlay}
            className="px-2 m-1"
          >
            <ToggleButton value="overlay-none">No Overlay</ToggleButton>
            <ToggleButton value="overlay-circle">Circle</ToggleButton>
            <ToggleButton value="overlay-square">Square</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Polylines;
