import DSETConferenceModalContent from "./ModalContents/DSETLeadership";
import AutomationPixiJS from "./ModalContents/AutomationPixiJS";
import AudioTranscriber from "./ModalContents/AudioTranscriber";
import StraightLine from "./ModalContents/StraightLine";
import TEDEdLesson from "./ModalContents/TEDEdLessons";
import ArtOfMentalCalc from "./ModalContents/ArtOfMentalCalc";
import MultiDataModalContent from "./ModalContents/MultiDimensionalDataExperts";
import NextGenerationPreschoolModalContent from "./ModalContents/NextGenerationPreschoolModalContent";

import Button from "react-bootstrap/Button";
import { DiGoogleDrive } from "react-icons/di";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import { IoMdClose } from "react-icons/io";
// Import project images
import audioTranscriber from "../../Assets/Projects/audio-transcriber.png";
import starryNight from "../../Assets/Projects/starry-night.png";
import multiData from "../../Assets/Projects/multi-data.png";
import straightLine from "../../Assets/Projects/straight-line.png";
import mentalCalc from "../../Assets/Projects/mental-calc.png";
import wbghNgps from "../../Assets/Projects/wbgh-ngps.png";
import codap from "../../Assets/Projects/codap.png";
// Import modal content components

// ...existing code...
const projects = [
  {
    imgPath: straightLine,
    isBlog: false,
    title: "But is it supposed to be a straight line?",
    description:
      "Conducted UX research on how users interpret noisy sensor data in exploratory interfaces. Surfaced key breakdowns in data visualization and proposed improvements to support graph literacy and interaction flow.",
    demoLink: "http://dx.doi.org/10.1080/09500693.2023.2260064",
    modalContent: <StraightLine />, 
  },
  {
    imgPath: multiData,
    isBlog: false,
    title: "Navigating Multidimensional Data Structures",
    description:
      "First author on award-winning ISLS paper examining how data experts reason with unfamiliar multidimensional datasets. Uncovered interaction patterns that inform interface design for exploratory data tools.",
    demoLink: "https://doi.org/10.22318/icls2024.613673",
    modalContent: <MultiDataModalContent />, 
  },
  {
    imgPath: starryNight,
    isBlog: false,
    title: "TED-Ed",
    description:
      "Wrote scripts for three TED-Ed videos exploring the mathematics behind art, music, and literature. Translated complex ideas into compelling narratives to enhance conceptual clarity and viewer engagement.",
    demoLink: "https://ed.ted.com/lessons/the-unexpected-math-behind-van-gogh-s-starry-night-natalya-st-clair",
    modalContent: <TEDEdLesson />, 
  },
  {
    imgPath: codap,
    isBlog: false,
    title: "CODAP automation",
    description:
      "Worked on QA and UX research for CODAP, an open-source data analysis platform used in education. I built automated Cypress tests to ensure interface reliability and led user research efforts to improve the tool’s usability based on real classroom feedback.",
    ghLink: "https://github.com/concord-consortium/codap/tree/main/v3/cypress/e2e/pixi-interaction",
    modalContent: <AutomationPixiJS />, 
  },
  {
    imgPath: audioTranscriber,
    isBlog: false,
    title: "Audio Transcriber",
    description:
      "Developed a Python-based transcription toolkit integrating Google Speech API and FasterWhisper. Designed for flexible UX—supports both real-time and offline workflows for accessibility and research use cases.",
    ghLink: "https://github.com/concord-consortium/audio-transcriber",
    modalContent: <AudioTranscriber />, 
  },
  {
    imgPath: mentalCalc,
    isBlog: false,
    title: "The Art of Mental Calculation",
    description:
      "Co-authored and illustrated a math workbook focused on rapid mental calculation. Designed 40+ engaging, accessible visuals to support intuitive understanding and user motivation in self-paced learning.",
    demoLink: "https://www.amazon.com/dp/1495219968",
    modalContent: <ArtOfMentalCalc />, 
  },
  {
    imgPath: codap,
    isBlog: false,
    title: "CODAP v2 Launch & DSET Conference",
    description:
      "Led the launch of CODAP v2 and organized the inaugural DSET conference, bringing together 100+ leaders in data science education to spark collaboration and showcase open-source tools in the K–12 space.",
    demoLink: "https://codap.concord.org/dset/index.html",
    modalContent: <DSETConferenceModalContent />,
  },
  {
    imgPath: wbghNgps,
    isBlog: false,
    title: "Next Generation Preschool",
    description:
      "UX research on tablet-based science tools, using mixed methods to assess usability and interaction design. Identified friction points in hybrid digital-hands-on workflows and delivered actionable design recommendations.",
    driveLink:
      "https://drive.google.com/file/d/0BwPizBG8eJiyb1RFTUVIYzgwaE0/view?usp=sharing&resourcekey=0-aGqxlTCJAuNFCBlmF2D0fA",
    demoLink:
      "https://drive.google.com/file/d/0BwPizBG8eJiyTlNDd3g4R3NKNWs/view?usp=sharing&resourcekey=0-94YjkFo5wHg7M7eT5x0BQQ",
    modalContent: <NextGenerationPreschoolModalContent />, 
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Helper to open modal with project details
  const handleProjectClick = (project) => {
    // Use a shallow copy to preserve React elements in modalContent
    setSelectedProject({ ...project });
  };

  // Helper to close modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  return (
    <>
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
            {projects.map((project, idx) => (
              <Col md={4} className="project-card" key={project.title + '-' + idx}>
                <ProjectCard
                  {...project}
                  renderImage={() => (
                    <img
                      src={project.imgPath}
                      alt={project.title}
                      onClick={e => {
                        e.stopPropagation();
                        handleProjectClick(project);
                      }}
                      style={{ cursor: 'pointer', width: '100%', borderRadius: 8, marginBottom: 0 }}
                    />
                  )}
                  renderTitle={() => (
                    <h2
                      onClick={e => {
                        e.stopPropagation();
                        handleProjectClick(project);
                      }}
                      style={{ cursor: 'pointer', marginBottom: 8 }}
                    >
                      {project.title}
                    </h2>
                  )}
                  // Pass open-in-modal handler as a prop for button row
                  onOpenModal={() => handleProjectClick(project)}
                />
              </Col>
            ))}
          </Row>
          {/* Modal overlay for project details */}
          {selectedProject && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                overflow: "hidden"
              }}
              onClick={handleCloseModal}
            >
              {/* Modal content wrapper */}
              <div
                style={{
                  background: "#f5f5f6",
                  padding: 32,
                  borderRadius: 18,
                  width: "75vw",
                  maxWidth: 1200,
                  minWidth: 320,
                  boxShadow: "0 2px 32px rgba(0,0,0,0.18)",
                  position: "relative",
                  animation: "modalUp 0.4s cubic-bezier(.4,1.6,.6,1)",
                  maxHeight: "90vh",
                  overflowY: "auto",
                  // Reduce right padding for desktop, and minimize on mobile
                  paddingRight: 40,
                }}
                onClick={e => e.stopPropagation()}
              >
                {/* Fixed close button inside modal, using absolute positioning relative to modal */}
                <button
                  style={{
                    position: "absolute",
                    top: 24,
                    right: 32,
                    background: "transparent",
                    border: "none",
                    fontSize: 32,
                    cursor: "pointer",
                    color: "#000",
                    zIndex: 10500,
                    padding: 8,
                    borderRadius: 8,
                    transition: "background 0.2s"
                  }}
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <IoMdClose />
                </button>
                {/* Removed white gradient overlay for right side readability */}
                <img
                  src={selectedProject.imgPath}
                  alt={selectedProject.title ? selectedProject.title : "Project image"}
                  style={{ width: "100%", borderRadius: 8, marginBottom: 16, paddingTop: 32 }}
                />
                <div style={{ marginBottom: 16 }}>
                  {selectedProject.modalContent ? selectedProject.modalContent : selectedProject.description}
                </div>
                {/* Use Button for Demo link */}
                {!selectedProject.isBlog && selectedProject.demoLink && (
                  <Button
                    variant="primary"
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: 12 }}
                  >
                    Demo
                  </Button>
                )}
                {/* Use Button for GitHub link */}
                {selectedProject.ghLink && (
                  <Button
                    variant="primary"
                    href={selectedProject.ghLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: 12 }}
                  >
                    GitHub
                  </Button>
                )}
                {/* Use Button for Drive link with icon */}
                {selectedProject.driveLink && (
                  <Button
                    variant="primary"
                    href={selectedProject.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: 12 }}
                  >
                    <DiGoogleDrive /> &nbsp;Drive
                  </Button>
                )}
              </div>
              <style>{`
                @keyframes modalUp {
                  0% { transform: translateY(60px) scale(0.98); opacity: 0; }
                  100% { transform: translateY(0) scale(1); opacity: 1; }
                }
                @media (max-width: 767px) {
                  /* Target the modal content wrapper directly for mobile */
                  .project-section > div[style*='position: fixed'] > div[style] {
                    padding-right: 8px !important;
                    padding-left: 8px !important;
                  }
                }
              `}</style>
            </div>
          )}
        </Container>
      </Container>
    </>
  );
}

export default Projects;