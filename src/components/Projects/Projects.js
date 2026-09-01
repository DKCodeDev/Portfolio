import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medway from "../../Assets/Projects/medway.svg";
import queuesense from "../../Assets/Projects/queuesense.svg";
import foodshare from "../../Assets/Projects/foodshare.svg";
import travel from "../../Assets/Projects/travel.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={medway}
              isBlog={false}
              title="MedWay"
              description="A web-based medicine platform that helps users check medicine availability and pricing, find generic/alternative medicines by matching active salt composition, and supports pharmacy-related functionality including demand forecasting. Built with Django, Django REST Framework, React, and Python."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={queuesense}
              isBlog={false}
              title="QueueSense"
              description="An AI-powered digital queue and appointment management system built to reduce waiting times and streamline appointment/queue management. Includes online booking, digital queue management, priority handling, separate admin and staff functionality, and analytics — designed for use cases like hospitals, banks, government offices, and restaurants. Built with Python and Flask."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodshare}
              isBlog={false}
              title="FoodShare / QuickBite"
              description="A web development project focused on food-related functionality, built using Python, Django, and ReactJS."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel Planner System"
              description="A console-based travel planning application with persistent trip storage and retrieval, developed using Java and JDBC-backed MySQL."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
