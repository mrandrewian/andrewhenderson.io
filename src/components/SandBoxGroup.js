import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import StarGroup from "./sandboxes/StarGroup";
import PolylineGroup from "./sandboxes/PolylineGroup";
import TroublesomeShapeGroup from "./sandboxes/TroublesomeShapeGroup";

class SandBoxGroup extends Component {
  render() {
    return (
      <Row>
        <Col className="mt-5">
          <h1>CSS Sandbox</h1>
        </Col>
        <StarGroup />
        <PolylineGroup />
        <TroublesomeShapeGroup />
      </Row>
    );
  }
}

export default SandBoxGroup;
