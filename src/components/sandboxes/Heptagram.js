import React, { Component } from "react";
import { ButtonToolbar, Button } from "react-bootstrap";

class Heptagram extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  randomize = () => {
    const min = 5;
    const max = 15;
    this.setState({
      styles1: {
        animationDuration:
          Math.floor(Math.random() * (+max - +min)) + +min + "s"
      },
      styles2: {
        animationDuration:
          Math.floor(Math.random() * (+max - +min)) + +min + "s"
      },
      styles3: {
        animationDuration:
          Math.floor(Math.random() * (+max - +min)) + +min + "s"
      },
      styles4: {
        animationDuration:
          Math.floor(Math.random() * (+max - +min)) + +min + "s"
      },
      styles5: {
        animationDuration:
          Math.floor(Math.random() * (+max - +min)) + +min + "s"
      },
      styles6: {
        animationDuration:
          Math.floor(Math.random() * (+max - +min)) + +min + "s"
      }
    });
  };

  render() {
    return (
      <div className="animated heptagram">
        <svg height="200" width="200">
          <polyline
            className="l1"
            points="0,-100 97,22 -43,90 -78,-62 78,-62 43,90 -97,22 0,-100"
            style={this.state.styles1}
          />
          <polyline
            className="l2"
            points="0,-90 -70,-56 -88,20 -39,81 39,81 88,20 70,-56 0,-90"
            style={this.state.styles2}
          />
          <polyline
            className="l3"
            points="0,-80 -63,-50 -78,18 -35,72 35,72 78,18 63,-50 0,-80"
            style={this.state.styles3}
          />
          <polyline
            className="l4"
            points="0,-80 78,18 -35,72 -63,-50 63,-50 35,72 -78,18 0,-80"
            style={this.state.styles4}
          />
          <polyline
            className="l5"
            points="0,-60 -47,-37 -58,13 -26,54 26,54 58,13 47,-37 0,-60"
            style={this.state.styles5}
          />
          <polyline
            className="l6"
            points="0,-50 -39,-31 -49,11 -22,45 22,45 49,11 39,-31 0,-50"
            style={this.state.styles6}
          />
        </svg>
        <ButtonToolbar className="justify-content-center">
          <Button className="px-2 m-1" onClick={() => this.randomize()}>
            Randomize Animation
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Heptagram;
