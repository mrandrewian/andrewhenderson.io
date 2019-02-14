import React, { Component } from "react";
import { Row } from "react-bootstrap";
import StarGroup from "./sandboxes/StarGroup";
import PolygonGroup from "./sandboxes/PolygonGroup";
import TroublesomeShapeGroup from "./sandboxes/TroublesomeShapeGroup";
import "../styles/ShapeStudy.scss";

class SandBoxGroup extends Component {
  render() {
    return (
      <Row>
        <h1>CSS Sandbox</h1>
        <StarGroup />
        <PolygonGroup />
        <TroublesomeShapeGroup />
      </Row>
    );
  }
}

export default SandBoxGroup;
