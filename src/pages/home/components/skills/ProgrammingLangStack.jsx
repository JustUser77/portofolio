import React from "react";
import { Col, Row } from "react-bootstrap";
import { Tooltip } from "react-tooltip";

import Java from "../../../../assets/imgs/techstack/java.png";
import Python from "../../../../assets/imgs/techstack/python.png";
import CLanguage from "../../../../assets/imgs/techstack/c_language.png";

const programmingLang = [
  { src: Java, alt: "Java", tooltipContent: "Java" },
  { src: Python, alt: "Python", tooltipContent: "Python" },
  { src: CLanguage, alt: "C", tooltipContent: "C" },
];

function ProgrammingLangStack() {
  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      className="stagger-children"
    >
      {programmingLang.map((pl) => (
        <Col key={pl.alt} xs={4} md={2} className="tech-icons">
          <img
            src={pl.src}
            width={100}
            alt={pl.alt}
            className="tech-icon-images"
            data-tooltip-id="programming-language-tech-tooltip"
            data-tooltip-content={pl.tooltipContent}
          />
        </Col>
      ))}
      <Tooltip id="programming-language-tech-tooltip" />
    </Row>
  );
}

export default ProgrammingLangStack;