import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaLinux } from "react-icons/fa";
import { SiVisualstudiocode, SiPostman, SiDatagrip ,SiPycharm } from "react-icons/si";
import { DiIntellij, DiPycharm } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.microsoft.com/en-us/windows"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <FaWindows />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.linux.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <FaLinux />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.jetbrains.com/idea/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <DiIntellij />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.jetbrains.com/pycharm/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <SiPycharm />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.postman.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <SiPostman />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.jetbrains.com/datagrip/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <SiDatagrip />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
