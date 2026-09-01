import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Khushi Dave</span>, a{" "}
            <span className="purple">
              Computer Science and Engineering
            </span>{" "}
            student at <span className="purple">LJ University</span>.
            <br />
            I’m currently entering{" "}
            <span className="purple">Semester 5</span>, with an expected
            graduation in <span className="purple">2028</span>.
            <br />
            I’m an aspiring{" "}
            <span className="purple">Full Stack Developer</span>, looking
            for software / web development{" "}
            <span className="purple">internship</span> opportunities.
            <br />
            <br />
            I enjoy working on:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building practical web applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning modern web technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Strengthening my Data Structures and DBMS
              fundamentals
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building!"{" "}
          </p>
          <footer className="blockquote-footer">Khushi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
