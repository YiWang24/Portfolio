import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flavor from "../../Assets/Projects/flavor.png";
import camp from "../../Assets/Projects/camp.png";

function Projects() {
  return (
    <Container fluid className="project-section " style={{minHeight: "100vh"}}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flavor}
              isBlog={false}
              title="Flavor"
              description="Flavor dedicated to celebrating the special moments and favorite experiences shared between me and my girlfriend. The website is built using Express.js for the backend, Bootstrap for a responsive and sleek frontend, and MongoDB for data storage. "
              ghLink="https://github.com/YiWang24/Flavor"
              demoLink="https://app1.yiwang.run/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={camp}
              isBlog={false}
              title="MyCamp"
              description="This is an express+bootstrap project. Regarding a camp website, you can add camps and score them. It is the first project learned from web development bootcamp."
              ghLink="https://github.com/YiWang24/WyCamp"
              demoLink="https://app2.yiwang.run/"
            />
          </Col>
          
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
