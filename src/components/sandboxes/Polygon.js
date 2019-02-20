import React, { Component } from "react";
import {
  ButtonToolbar,
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

class Polygon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: "M 100 0 -81 59 31 -95 31 95 -81 -59 Z",
      vertexes: 5,
      radius: 100,
      polygram: true,
      layers: 1
    };
  }

  poly = (x, y, n, r, v) => {
    let pathArray = ["M"],
      order = v ? 2 : 1,
      spin = 0;

    for (let i = 0; i < n; i++) {
      if (n % 2 === 0 && v && i === n / 2) {
        pathArray.push("Z M");
        spin = 0.5;
      }
      let xNode =
          x + r * Math.cos((2 * Math.PI * ((i - spin) * order)) / n).toFixed(2),
        yNode =
          y + r * Math.sin((2 * Math.PI * ((i - spin) * order)) / n).toFixed(2);
      pathArray.push(xNode + " " + yNode);
    }
    pathArray.push("Z");
    pathArray = pathArray.join(" ");

    this.setState({ path: pathArray });
  };

  setVertexes = event => {
    this.setState({ vertexes: event.target.value });
  };

  setRadius = eventKey => {
    this.setState({ radius: eventKey });
  };

  setPolygram = eventKey => {
    if (eventKey === "true") {
      this.setState({ polygram: true });
    } else {
      this.setState({ polygram: false });
    }
  };

  render() {
    return (
      <div>
        <svg className="polygon" height="200" width="200">
          <path d={this.state.path} />
        </svg>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Number of Vertexes</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="input"
            aria-label="Number of Vertexes"
            onChange={this.setVertexes}
          />
        </InputGroup>
        <ButtonToolbar className="justify-content-center">
          <DropdownButton className="px-2 m-1" id="poly-type" title="Poly Type">
            <Dropdown.Item onSelect={this.setPolygram} eventKey={false}>
              Polygon
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.setPolygram} eventKey={true}>
              Polygram
            </Dropdown.Item>
          </DropdownButton>
          <Button
            className="px-2 m-1"
            onClick={() => {
              this.poly(
                0,
                0,
                this.state.vertexes,
                this.state.radius,
                this.state.polygram
              );
            }}
            className="btn btn-primary"
          >
            Update Path
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Polygon;
