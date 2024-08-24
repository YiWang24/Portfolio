import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div></div>
    <Container fluid className="footer" style={{ marginTop: "auto" }}>
      <Row>
        <Col md="2" className="footer-copywright">
          <h3>Design by Soumyajit Behera</h3>
        </Col>
        <Col md="2" className="footer-copywright">
          <h3>Depolyed by Yi Wang</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} YW</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
            <a
                href={LINKS.github}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={LINKS.twitter}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={LINKS.linkedin}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={LINKS.instagram}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={LINKS.gmail}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
