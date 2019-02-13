import React, { Component } from 'react';
import '../styles/Heptagram.scss'

class Heptagram extends Component {

  render() {
    return (
      <svg className="animated-heptogram" height="100" width="100">
        <polyline className="l1" points="0,-100 97,22 -43,90 -78,-62 78,-62 43,90 -97,22 0,-100"/>
        <polyline className="l2" points="0,-90 -70,-56 -88,20 -39,81 39,81 88,20 70,-56 0,-90"/>
        <polyline className="l3" points="0,-80 -63,-50 -78,18 -35,72 35,72 78,18 63,-50 0,-80"/>
        <polyline className="l4" points="0,-80 78,18 -35,72 -63,-50 63,-50 35,72 -78,18 0,-80"/>
        <polyline className="l5" points="0,-60 -47,-37 -58,13 -26,54 26,54 58,13 47,-37 0,-60"/>
        <polyline className="l6" points="0,-50 -39,-31 -49,11 -22,45 22,45 49,11 39,-31 0,-50"/>
      </svg>
    )
  }
}

export default Heptagram