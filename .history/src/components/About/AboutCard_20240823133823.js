import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, I'm <span className="purple">Yi Wang</span>, a
            passionate programmer from{" "}
            <span className="purple">Zhengzhou, China</span>.
            <div>
              I am currently pursuing a Bachelor of Science in{" "}
              <span className="purple">Computer Science</span> in{" "}
              <span className="purple">Toronto</span>.
            </div>
            <div>
              I hold a Bachelor's degree in Economics and a Master's degree in
              Applied Statistics.
            </div>
            <div>
              Before diving into computer science, I worked for two years as a
              data analyst in the banking credit sector, where I built a solid
              foundation in <span className="purple"></span>data analysis.
            </div>
            <div>
              My goal is to become a full-stack developer. I am driven by a
              passion for solving complex challenges and developing innovative
              software solutions. I look forward to connecting and collaborating
              on exciting projects.
            </div>
            <div>Beyond programming, I enjoy</div>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Body building
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is not just a tool, but a way to shape ideas and create
            possibilities!"{" "}
          </p>
          <footer className="blockquote-footer">Yi Wang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
