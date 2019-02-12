import React, { Component } from 'react';
import '../styles/Polygons.scss'

class Polygons extends Component {

  loopPolygons = (count) => {
    let polygons = []
    for (let i = 0; i < count; i++) {
      polygons.push(
        <React.Fragment>
          <polygon className={`tl ${this.props.varient}${i}`} points="-105,-5 -5,-5 -5,-105 -5,-5" />
          <polygon className={`tl ${this.props.varient}${i}`} points="5,-105 5,-5 105,-5 5,-5" />
          <polygon className={`tl ${this.props.varient}${i}`} points="105,5 5,5 5,105 5,5" />
          <polygon className={`tl ${this.props.varient}${i}`} points="-5,105 -5,5 -105,5 -5,5" />

          <polygon className={`tl1 ${this.props.varient}${i}`} points="-105,-15 -15,-15 -15,-105 -15,-15" />
          <polygon className={`tl1 ${this.props.varient}${i}`} points="15,-105 15,-15 105,-15 15,-15" />
          <polygon className={`tl1 ${this.props.varient}${i}`} points="105,15 15,15 15,105 15,15" />
          <polygon className={`tl1 ${this.props.varient}${i}`} points="-15,105 -15,15 -105,15 -15,15" />

          <polygon className={`tl2 ${this.props.varient}${i}`} points="-105,-25 -25,-25 -25,-105 -25,-25" />
          <polygon className={`tl2 ${this.props.varient}${i}`} points="25,-105 25,-25 105,-25 25,-25" />
          <polygon className={`tl2 ${this.props.varient}${i}`} points="105,25 25,25 25,105 25,25" />
          <polygon className={`tl2 ${this.props.varient}${i}`} points="-25,105 -25,25 -105,25 -25,25" />

          <polygon className={`tl3 ${this.props.varient}${i}`} points="-105,-35 -35,-35 -35,-105 -35,-35" />
          <polygon className={`tl3 ${this.props.varient}${i}`} points="35,-105 35,-35 105,-35 35,-35" />
          <polygon className={`tl3 ${this.props.varient}${i}`} points="105,35 35,35 35,105 35,35" />
          <polygon className={`tl3 ${this.props.varient}${i}`} points="-35,105 -35,35 -105,35 -35,35" />

          <polygon className={`tl4 ${this.props.varient}${i}`} points="-105,-45 -45,-45 -45,-105 -45,-45" />
          <polygon className={`tl4 ${this.props.varient}${i}`} points="45,-105 45,-45 105,-45 45,-45" />
          <polygon className={`tl4 ${this.props.varient}${i}`} points="105,45 45,45 45,105 45,45" />
          <polygon className={`tl4 ${this.props.varient}${i}`} points="-45,105 -45,45 -105,45 -45,45" />

          <polygon className={`tl5 ${this.props.varient}${i}`} points="-105,-55 -55,-55 -55,-105 -55,-55" />
          <polygon className={`tl5 ${this.props.varient}${i}`} points="55,-105 55,-55 105,-55 55,-55" />
          <polygon className={`tl5 ${this.props.varient}${i}`} points="105,55 55,55 55,105 55,55" />
          <polygon className={`tl5 ${this.props.varient}${i}`} points="-55,105 -55,55 -105,55 -55,55" />

          <polygon className={`tl6 ${this.props.varient}${i}`} points="-105,-65 -65,-65 -65,-105 -65,-65" />
          <polygon className={`tl6 ${this.props.varient}${i}`} points="65,-105 65,-65 105,-65 65,-65" />
          <polygon className={`tl6 ${this.props.varient}${i}`} points="105,65 65,65 65,105 65,65" />
          <polygon className={`tl6 ${this.props.varient}${i}`} points="-65,105 -65,65 -105,65 -65,65" />

          <polygon className={`tl7 ${this.props.varient}${i}`} points="-105,-75 -75,-75 -75,-105 -75,-75" />
          <polygon className={`tl7 ${this.props.varient}${i}`} points="75,-105 75,-75 105,-75 75,-75" />
          <polygon className={`tl7 ${this.props.varient}${i}`} points="105,75 75,75 75,105 75,75" />
          <polygon className={`tl7 ${this.props.varient}${i}`} points="-75,105 -75,75 -105,75 -75,75" />

          <polygon className={`tl8 ${this.props.varient}${i}`} points="-105,-85 -85,-85 -85,-105 -85,-85" />
          <polygon className={`tl8 ${this.props.varient}${i}`} points="85,-105 85,-85 105,-85 85,-85" />
          <polygon className={`tl8 ${this.props.varient}${i}`} points="105,85 85,85 85,105 85,85" />
          <polygon className={`tl8 ${this.props.varient}${i}`} points="-85,105 -85,85 -105,85 -85,85" />

          <polygon className={`tl9 ${this.props.varient}${i}`} points="-105,-95 -95,-95 -95,-105 -95,-95" />
          <polygon className={`tl9 ${this.props.varient}${i}`} points="95,-105 95,-95 105,-95 95,-95" />
          <polygon className={`tl9 ${this.props.varient}${i}`} points="105,95 95,95 95,105 95,95" />
          <polygon className={`tl9 ${this.props.varient}${i}`} points="-95,105 -95,95 -105,95 -95,95" />
        </React.Fragment>
      )
    }
    return polygons
  }

  render() {
    return (
      <svg height="150" width="1">
        {this.loopPolygons(this.props.count)}
      </svg>
    )
  }
}

export default Polygons