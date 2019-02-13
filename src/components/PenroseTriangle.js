import React, { Component } from 'react';
import '../styles/PenroseTriangle.scss'

class PenroseTriangle extends Component {

  render() {
    return (
      <svg height="100" width="100">
        <polygon className="left" points="-20,-100 0,-100 -90,80 -110,80"/>
        <polygon className="left-inside" points="-90,80, -70,80, 10,-80 0,-100"/>

        <polygon className="bottom-top" points="-110,80 50,80 60,100 -120,100"/>
        <polygon className="bottom-bottom" points="-120,100 60,100 70,120 -110,120"/>

        <polygon className="right-inside" points="70,120 90,120 0,-60 -10,-40"/>
        <polygon className="right" points="90,120 100,100 10,-80 0,-60"/>
      </svg>
    )
  }
}

export default PenroseTriangle