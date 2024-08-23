import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Yi Wang. </span>
            Originally from <span className="purple"> Zhengzhou, China.</span>
            <br />
            I'm a passionate programmer currently pursuing a Bachelor of Science
            in <span className="purple">Computer Science</span> at{" "}
            <span className="purple">Toronto.</span>
            <br />
            I hold a Bachelor's degree in Economics and a Master's degree in
            Applied Statistics.
            <br />
            Before transitioning into computer science, I worked as a data
            analyst in the banking credit sector for two years, where I
            developed a strong foundation in data analysis.
            <br />
            

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
