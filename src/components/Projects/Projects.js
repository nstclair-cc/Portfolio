import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tedEd from "../../Assets/Projects/starry-night.png";
import codap from "../../Assets/Projects/codap.png";
import mentalCalc from "../../Assets/Projects/mental-calc.png";
import wbghNgps from "../../Assets/Projects/wbgh-ngps.png";
import audioTranscriber from "../../Assets/Projects/audio-transcriber.png";
import straightLine from "../../Assets/Projects/straight-line.png";
import multiData from "../../Assets/Projects/multi-data.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wbghNgps}
              isBlog={false}
              title="Next Generation Preschool"
              description="UX research on tablet-based science tools, using mixed methods to assess usability and interaction design. Identified friction points in hybrid digital-hands-on workflows and delivered actionable design recommendations."
              driveLink="https://drive.google.com/file/d/0BwPizBG8eJiyb1RFTUVIYzgwaE0/view?usp=sharing&resourcekey=0-aGqxlTCJAuNFCBlmF2D0fA"
              demoLink="https://drive.google.com/file/d/0BwPizBG8eJiyTlNDd3g4R3NKNWs/view?usp=sharing&resourcekey=0-94YjkFo5wHg7M7eT5x0BQQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multiData}
              isBlog={false}
              title="Navigating Multidimensional Data Structures"
              description="First author on award-winning ISLS paper examining how data experts reason with unfamiliar multidimensional datasets. Uncovered interaction patterns that inform interface design for exploratory data tools."
              demoLink="http://dx.doi.org/10.22318/icls2024.613673"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tedEd}
              isBlog={false}
              title="TED-Ed"
              description="Wrote scripts for three TED-Ed videos exploring the mathematics behind art, music, and literature. Translated complex ideas into compelling narratives to enhance conceptual clarity and viewer engagement."
              demoLink="https://ed.ted.com/lessons/the-unexpected-math-behind-van-gogh-s-starry-night-natalya-st-clair"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={straightLine}
              isBlog={false}
              title="But is it supposed to be a straight line?"
              description="Conducted UX research on how users interpret noisy sensor data in exploratory interfaces. Surfaced key breakdowns in data visualization and proposed improvements to support graph literacy and interaction flow."
              demoLink="https://www.tandfonline.com/doi/epdf/10.1080/09500693.2023.2260064?needAccess=true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mentalCalc}
              isBlog={false}
              title="The Art of Mental Calculation"
              description="Co-authored and illustrated a math workbook focused on rapid mental calculation. Designed 40+ engaging, accessible visuals to support intuitive understanding and user motivation in self-paced learning."
              demoLink="https://a.co/d/dEbprVK"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audioTranscriber}
              isBlog={false}
              title="Audio Transcriber"
              description="Developed a Python-based transcription toolkit integrating Google Speech API and FasterWhisper. Designed for flexible UX—supports both real-time and offline workflows for accessibility and research use cases."
              ghLink="https://github.com/concord-consortium/audio-transcriber"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codap}
              isBlog={false}
              title="CODAP"
              description="Conducted QA and UX research for CODAP, a data analysis tool. Developed Cypress test coverage to ensure interface reliability, and led user studies to drive data-informed UI/UX enhancements."
              ghLink="https://github.com/concord-consortium/codap"
              demoLink="https://codap.concord.org/app/static/dg/en/cert/index.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;