import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { DiNodejs, DiMongodb, DiJava, DiPython, DiGit } from "react-icons/di";
import { SiExpress, SiMysql, SiHive, SiReact, SiVuedotjs } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
          <FaHtml5 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
          <FaCss3Alt />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
          <FaJsSquare />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          <DiNodejs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
          <SiExpress />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
          <SiMysql />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://hive.apache.org/" target="_blank" rel="noopener noreferrer">
          <SiHive />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
          <DiMongodb />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer">
          <DiJava />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
          <DiPython />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
          <DiGit />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <SiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
          <SiVuedotjs />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
