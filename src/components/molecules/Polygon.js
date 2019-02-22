import React, { Component } from "react";
import {
  ButtonToolbar,
  DropdownButton,
  Dropdown,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
import Svg from "../atoms/Svg";
import PolyPath from "../atoms/PolyPath";

import { poly } from "../../utils/poly";

import "./Polygon.scss";

class Polygon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      d: "M 100 0 -81 59 31 -95 31 95 -81 -59 Z",
      vertexes: 5,
      radius: 100,
      polygram: true,
      spin: 0,
      layers: 1
    };
  }

  dropDownLoop = (s, f) => {
    let dropdownitems = [];
    for (let i = s; i <= f; i++) {
      dropdownitems.push(
        <Dropdown.Item onSelect={this.setVertexes} eventKey={i}>
          {i}
        </Dropdown.Item>
      );
    }
    return dropdownitems;
  };

  setVertexes = eventKey => {
    this.setState({ vertexes: eventKey }, () => this.updatePoly());
  };

  setRadius = eventKey => {
    this.setState({ radius: eventKey }, () => this.updatePoly());
  };

  setSpin = eventKey => {
    this.setState({ spin: eventKey }, () => this.updatePoly());
  };

  setPolygram = value => {
    value === "polygon"
      ? this.setState({ polygram: false }, () => this.updatePoly())
      : this.setState({ polygram: true }, () => this.updatePoly());
  };

  updatePoly = () => {
    this.setState({
      d: poly(
        0,
        0,
        this.state.vertexes,
        this.state.radius,
        this.state.spin,
        this.state.polygram
      )
    });
  };

  render() {
    return (
      <div className="px-2 m-1">
        <Svg className="polygon" height="200" width="200">
          <PolyPath d={this.state.d} />
        </Svg>
        <ButtonToolbar className="justify-content-center">
          <DropdownButton
            className="px-2 m-1"
            id="varient-button"
            title="Vertexes"
          >
            {this.dropDownLoop(3, 12)}
          </DropdownButton>
          <ToggleButtonGroup
            name="polyGroup"
            type="radio"
            value={this.state.value}
            onChange={this.setPolygram}
            className="px-2 m-1"
          >
            <ToggleButton value="polygon">Polygon</ToggleButton>
            <ToggleButton value="polygram">Polygram</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Polygon;
