import React, { Component } from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import Svg from "../atoms/Svg";
import Polyline from "../atoms/Polyline";

import "./Heptagram.scss";

class Heptagram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      points: [
        "0,-100 97,22 -43,90 -78,-62 78,-62 43,90 -97,22 0,-100",
        "0,-90 -70,-56 -88,20 -39,81 39,81 88,20 70,-56 0,-90",
        "0,-80 -63,-50 -78,18 -35,72 35,72 78,18 63,-50 0,-80",
        "0,-80 78,18 -35,72 -63,-50 63,-50 35,72 -78,18 0,-80",
        "0,-60 -47,-37 -58,13 -26,54 26,54 58,13 47,-37 0,-60",
        "0,-50 -39,-31 -49,11 -22,45 22,45 49,11 39,-31 0,-50"
      ],
      polylines: {}
    };
  }

  loopPolylines = points => {
    let polylines = [];
    for (let i = 0; i < points.length; i++) {
      polylines.push(
        <Polyline
          className={`l${i} animated heptagram`}
          style={this.randomize()}
          points={points[i]}
        />
      );
    }
    return polylines;
  };

  randomize = () => {
    const min = 5;
    const max = 15;
    return {
      animationDuration: Math.floor(Math.random() * (+max - +min)) + +min + "s"
    };
  };

  updateAnimation = () => {
    this.loopPolylines(this.state.points);
  };

  render() {
    return (
      <div className="animated heptagram">
        <Svg height="200" width="200">
          {this.loopPolylines(this.state.points)}
        </Svg>
        <ButtonToolbar className="justify-content-center">
          {/* This doesn't work...  need to figure out someway to get this work both on render and on click */}
          <Button className="px-2 m-1" onClick={() => this.updateAnimation()}>
            Randomize Animation
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Heptagram;
