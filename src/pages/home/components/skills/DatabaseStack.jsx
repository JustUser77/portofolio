import React from "react";
import { Col, Row } from "react-bootstrap";
import { Tooltip } from "react-tooltip";

import MySQL from "../../../../assets/imgs/techstack/mysql.png";

function DatabaseStack() {
  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      className="stagger-children"
    >
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={MySQL}
          width={100}
          alt="MySQL"
          className="tech-icon-images"
          data-tooltip-id="database-tech-tooltip"
          data-tooltip-content="MySQL"
        />
      </Col>
      <Tooltip id="database-tech-tooltip" />
    </Row>
  );
}

export default DatabaseStack;