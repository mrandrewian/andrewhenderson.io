import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Spring, animated } from "react-spring/renderprops";
import { GradientPinkRed, GradientPurpleTeal } from "@vx/gradient";
import * as easings from "d3-ease";

console.log(easings);

export default class App extends React.Component {
  state = { offset: 0 };
  path = React.createRef();
  componentDidMount() {
    this.setState({ offset: this.path.current.getTotalLength() });
  }
  render() {
    const { offset } = this.state;
    return (
      <div>
        <svg className="spring-heptagram" width="200" height="200">
          <GradientPinkRed id="gradient-stroke" />
          <GradientPurpleTeal id="gradient-fill" />
          <g
            // fill="url(#gradient-fill)"
            fill="none"
            stroke="url(#gradient-stroke)"
            strokeWidth="3"
          >
            <Spring
              native
              reset
              from={{ dash: offset }}
              to={{ dash: 0 }}
              config={{
                delay: 1000,
                duration: 6000,
                easing: easings.easeCubic
              }}
            >
              {props => (
                <animated.path
                  ref={this.path}
                  strokeDasharray={offset}
                  strokeDashoffset={props.dash}
                  // d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  d="M 0 -100 L 97 22 L -43 90 L -78 -62 L 78-62 L 43 90 L -97 22 
                     L 0 -100 L -78 -62 L -97 22 L -43 90 L 43 90 L 97 22 L 78,-62 
                     L 0 -100 L -43 90 L 78,-62 L -97 22 L 97 22 L -78 -62 43 90 Z"
                />
              )}
            </Spring>
          </g>
        </svg>
        <ButtonToolbar className="justify-content-center">
          <Button onClick={() => this.forceUpdate()}>Rerun Animation</Button>
        </ButtonToolbar>
      </div>
    );
  }
}
