import React, { Component } from "react";
import {
  ButtonToolbar,
  DropdownButton,
  Dropdown,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";

import "./Polygon.scss";

class Polygon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: "M 100 0 -81 59 31 -95 31 95 -81 -59 Z",
      vertexes: 5,
      radius: 100,
      polygram: true,
      spin: 0,
      layers: 1
    };
  }

  poly = (x, y, n, r, s = 0, v) => {
    let pathArray = ["M"],
      order = v ? 2 : 1;

    for (let i = 0; i < n; i++) {
      if (n % 2 === 0 && v && i === n / 2) {
        pathArray.push("Z M");
        s = 0.5;
      }
      let xNode =
          x + r * Math.cos((2 * Math.PI * ((i - s) * order)) / n).toFixed(2),
        yNode =
          y + r * Math.sin((2 * Math.PI * ((i - s) * order)) / n).toFixed(2);
      pathArray.push(xNode + " " + yNode);
    }
    pathArray.push("Z");
    pathArray = pathArray.join(" ");

    this.setState({ path: pathArray });
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
    this.poly(
      0,
      0,
      this.state.vertexes,
      this.state.radius,
      this.state.spin,
      this.state.polygram
    );
  };

  render() {
    return (
      <div className="px-2 m-1">
        <svg className="polygon" height="200" width="200">
          <path d={this.state.path} />
        </svg>
        <ButtonToolbar className="justify-content-center">
          <DropdownButton
            className="px-2 m-1"
            id="varient-button"
            title="Vertexes"
          >
            <Dropdown.Item onSelect={this.setVertexes} eventKey="5">
              5
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setVertexes} eventKey="6">
              6
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setVertexes} eventKey="7">
              7
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setVertexes} eventKey="8">
              8
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setVertexes} eventKey="9">
              9
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setVertexes} eventKey="10">
              10
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setVertexes} eventKey="11">
              11
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setVertexes} eventKey="12">
              12
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setVertexes} eventKey="13">
              13
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setVertexes} eventKey="14">
              14
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setVertexes} eventKey="15">
              15
            </Dropdown.Item>
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
