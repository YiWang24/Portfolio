import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const LINKS = {
  github: "https://github.com/YiWang24",
  twitter: "https://x.com/wang_yi13857",
  linkedin: "https://www.linkedin.com/in/yi-wang-51892731a/",
  instagram: "https://www.instagram.com/yiwang2026/",
  gmail: "mailto:yiwang2457@gmail.com",
};

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am Yi Wang, a Computer Science student in Toronto.
              <br />
              <br />I have a background in
              <i>
                <b className="purple"> Economics and Applied Statistics. </b>
              </i>
              <br />
              <br />I worked as a data analyst in the{" "}
              <i>
                <b className="purple">banking credit </b>
              </i>
              sector for two years. &nbsp;
              <br />
              <br />
              I've learned various programming technologies and continue to
              expand my skills, such as <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Vue.js</b>
              </i>
              <br />
              <br />
              My goal is to become a{" "}
              <i>
                <b className="purple">full-stack developer</b>
              </i>{" "}
              with a strong passion for programming.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={LINKS.twitter}
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={LINKS.gmail}
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiGmail />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
