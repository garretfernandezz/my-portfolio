import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (      
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Insync Connect"
              description="Our mission is to streamline communication between caregivers, guardians and staff. This website going to be used by Navkshitij, an NGO for mentally challanged individuals and it aims to improve special needs care and makes it more accesible"
              demoLink="https://github.com/GargiMittal10/website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Eventify SIU"
              description="A robust and effecient College Event Management System to effeciently plan end execute Events on the College level. Helps in managing budget, Volunteers, participants, faculty coordinators, venues, etc."
              demoLink="https://github.com/garretfernandezz/eventify/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ProfileGuard"
              description="With increasing cases of cyber bullying, deepfakes and identity theft, this project aims to detect wather a social media account is fake or not using machine learning models. "
              demoLink="https://github.com/garretfernandezz/Fake-Account-Detection-System"
            />
          </Col>

          

          

          

          
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

// TODO:SHLOK - Change logo in title bar