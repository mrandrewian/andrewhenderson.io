import React, { Component } from 'react';
import { ButtonToolbar, Dropdown, DropdownButton } from 'react-bootstrap';
import '../styles/Polygons.scss'

class Polygons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layers: this.props.count,
      varient: this.props.varient
    };
  }

  setLayers = (eventKey) => {
    this.setState({ layers: eventKey })
  }

  setVarient = (eventKey) => {
    this.setState({ varient: eventKey })
  }

  loopPolygons = (layers) => {
    let polygons = []
    for (let i = 0; i < layers; i++) {
      polygons.push(
        <React.Fragment>
          <polygon className={`tl ${this.state.varient}${i}`} points="-105,-5 -5,-5 -5,-105 -5,-5" />
          <polygon className={`tl ${this.state.varient}${i}`} points="5,-105 5,-5 105,-5 5,-5" />
          <polygon className={`tl ${this.state.varient}${i}`} points="105,5 5,5 5,105 5,5" />
          <polygon className={`tl ${this.state.varient}${i}`} points="-5,105 -5,5 -105,5 -5,5" />

          <polygon className={`tl1 ${this.state.varient}${i}`} points="-105,-15 -15,-15 -15,-105 -15,-15" />
          <polygon className={`tl1 ${this.state.varient}${i}`} points="15,-105 15,-15 105,-15 15,-15" />
          <polygon className={`tl1 ${this.state.varient}${i}`} points="105,15 15,15 15,105 15,15" />
          <polygon className={`tl1 ${this.state.varient}${i}`} points="-15,105 -15,15 -105,15 -15,15" />

          <polygon className={`tl2 ${this.state.varient}${i}`} points="-105,-25 -25,-25 -25,-105 -25,-25" />
          <polygon className={`tl2 ${this.state.varient}${i}`} points="25,-105 25,-25 105,-25 25,-25" />
          <polygon className={`tl2 ${this.state.varient}${i}`} points="105,25 25,25 25,105 25,25" />
          <polygon className={`tl2 ${this.state.varient}${i}`} points="-25,105 -25,25 -105,25 -25,25" />

          <polygon className={`tl3 ${this.state.varient}${i}`} points="-105,-35 -35,-35 -35,-105 -35,-35" />
          <polygon className={`tl3 ${this.state.varient}${i}`} points="35,-105 35,-35 105,-35 35,-35" />
          <polygon className={`tl3 ${this.state.varient}${i}`} points="105,35 35,35 35,105 35,35" />
          <polygon className={`tl3 ${this.state.varient}${i}`} points="-35,105 -35,35 -105,35 -35,35" />

          <polygon className={`tl4 ${this.state.varient}${i}`} points="-105,-45 -45,-45 -45,-105 -45,-45" />
          <polygon className={`tl4 ${this.state.varient}${i}`} points="45,-105 45,-45 105,-45 45,-45" />
          <polygon className={`tl4 ${this.state.varient}${i}`} points="105,45 45,45 45,105 45,45" />
          <polygon className={`tl4 ${this.state.varient}${i}`} points="-45,105 -45,45 -105,45 -45,45" />

          <polygon className={`tl5 ${this.state.varient}${i}`} points="-105,-55 -55,-55 -55,-105 -55,-55" />
          <polygon className={`tl5 ${this.state.varient}${i}`} points="55,-105 55,-55 105,-55 55,-55" />
          <polygon className={`tl5 ${this.state.varient}${i}`} points="105,55 55,55 55,105 55,55" />
          <polygon className={`tl5 ${this.state.varient}${i}`} points="-55,105 -55,55 -105,55 -55,55" />

          <polygon className={`tl6 ${this.state.varient}${i}`} points="-105,-65 -65,-65 -65,-105 -65,-65" />
          <polygon className={`tl6 ${this.state.varient}${i}`} points="65,-105 65,-65 105,-65 65,-65" />
          <polygon className={`tl6 ${this.state.varient}${i}`} points="105,65 65,65 65,105 65,65" />
          <polygon className={`tl6 ${this.state.varient}${i}`} points="-65,105 -65,65 -105,65 -65,65" />

          <polygon className={`tl7 ${this.state.varient}${i}`} points="-105,-75 -75,-75 -75,-105 -75,-75" />
          <polygon className={`tl7 ${this.state.varient}${i}`} points="75,-105 75,-75 105,-75 75,-75" />
          <polygon className={`tl7 ${this.state.varient}${i}`} points="105,75 75,75 75,105 75,75" />
          <polygon className={`tl7 ${this.state.varient}${i}`} points="-75,105 -75,75 -105,75 -75,75" />

          <polygon className={`tl8 ${this.state.varient}${i}`} points="-105,-85 -85,-85 -85,-105 -85,-85" />
          <polygon className={`tl8 ${this.state.varient}${i}`} points="85,-105 85,-85 105,-85 85,-85" />
          <polygon className={`tl8 ${this.state.varient}${i}`} points="105,85 85,85 85,105 85,85" />
          <polygon className={`tl8 ${this.state.varient}${i}`} points="-85,105 -85,85 -105,85 -85,85" />

          <polygon className={`tl9 ${this.state.varient}${i}`} points="-105,-95 -95,-95 -95,-105 -95,-95" />
          <polygon className={`tl9 ${this.state.varient}${i}`} points="95,-105 95,-95 105,-95 95,-95" />
          <polygon className={`tl9 ${this.state.varient}${i}`} points="105,95 95,95 95,105 95,95" />
          <polygon className={`tl9 ${this.state.varient}${i}`} points="-95,105 -95,95 -105,95 -95,95" />
        </React.Fragment>
      )
    }
    return polygons
  }

  render() {
    return (
      <div>
        <svg height="150" width="1">
          {this.loopPolygons(this.state.layers)}
        </svg>
          <ButtonToolbar className="justify-content-center">
            <DropdownButton className="p-2" id="layers-button" title="Layers">
              <Dropdown.Item onSelect={this.setLayers} eventKey="1">1</Dropdown.Item>
              <Dropdown.Item onSelect={this.setLayers} eventKey="2">2</Dropdown.Item>
              <Dropdown.Item onSelect={this.setLayers} eventKey="3">3</Dropdown.Item>
              <Dropdown.Item onSelect={this.setLayers} eventKey="4">4</Dropdown.Item>
            </DropdownButton>
            <DropdownButton className="p-2" id="varient-button" title="Varient">
              <Dropdown.Item onSelect={this.setVarient} eventKey="a">A</Dropdown.Item>
              <Dropdown.Item onSelect={this.setVarient} eventKey="b">B</Dropdown.Item>
              <Dropdown.Item onSelect={this.setVarient} eventKey="c">C</Dropdown.Item>
            </DropdownButton>
          </ButtonToolbar>
      </div>
    )
  }
}

export default Polygons