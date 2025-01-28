import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/blog.png";
import constructionplanner from "../../Assets/Projects/constructionplanner.png";
import travelog from "../../Assets/Projects/travelog.png";

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
              imgPath={travelog}
              isBlog={false}
              title="Travelog"
              description="Online Bus Ticket Reservation System is a web-based application that works within a file.
 one network. This project introduces an update to the software program “Online Bus Ticket
 Reservation System ”as it should be used in the bus system, the area used reserved seats,
 booking cancellations and various types of route inquiries used for security quick booking.
 OBTRS is designed to manage and compile a traditional database, ticket booking and bus
 tracking and departure made 
 Technologies used-
backend:php
database: mysql "
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={constructionplanner}
              isBlog={false}
              title="Construction Planner"
              description="Construction planner is an online site that encapsulates the work of an architect, 
civil engineer, designer and contractors under a single roof. A registered user 
can request to get an elevation of a house based on his wish. User can filter out 
the architects, based on their works that have already uploaded. The user can 
select any architect and provide their instruction. The architect works on the 
instruction and produces a blueprint of the work. If the user is further interested 
on viewing how the elevation looks like in a 3D version the work can be 
forwarded to a 3D Designer. Technologies-
frontend:framework--Bootstrap
backend:python  
framework-Django
Database-MySql
"
              ghLink="https://github.com/Sruthias24/construction-planner.git"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio using React JS"
              description="My personal portfolio web-application build with React JS, Reactstrap, React icons,HTML,CSS."
              ghLink=""

              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
