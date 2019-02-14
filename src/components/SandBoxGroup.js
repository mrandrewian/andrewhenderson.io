import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import StarGroup from "./sandboxes/StarGroup";
import PolygonGroup from "./sandboxes/PolygonGroup";
import TroublesomeShapeGroup from "./sandboxes/TroublesomeShapeGroup";

class SandBoxGroup extends Component {
  render() {
    return (
      <Row>
        <Col className="mt-5">
          <h1>CSS Sandbox</h1>
        </Col>
        <StarGroup />
        <PolygonGroup />
        <TroublesomeShapeGroup />
      </Row>
    );
  }
}

export default SandBoxGroup;
