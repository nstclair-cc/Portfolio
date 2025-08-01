import DSETConferenceModalContent from "./ModalContents/DSETLeadership";
import AutomationPixiJS from "./ModalContents/AutomationPixiJS";
import AudioTranscriber from "./ModalContents/AudioTranscriber";
import StraightLine from "./ModalContents/StraightLine";
import TEDEdLesson from "./ModalContents/TEDEdLessons";
import ArtOfMentalCalc from "./ModalContents/ArtOfMentalCalc";
import MultiDataModalContent from "./ModalContents/MultiDimensionalDataExperts";
import NextGenerationPreschoolModalContent from "./ModalContents/NextGenerationPreschoolModalContent";
import InternalDocumentationModalContent from "./ModalContents/InternalDocumentation";

import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { DiGoogleDrive } from "react-icons/di";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import { IoMdClose } from "react-icons/io";
// Import project images
import audioTranscriber from "../../Assets/Projects/audio-transcriber.svg";
import starryNight from "../../Assets/Projects/starry-night.svg";
import multiData from "../../Assets/Projects/multi-data.svg";
import straightLine from "../../Assets/Projects/straight-line.svg";
import mentalCalc from "../../Assets/Projects/mental-calc.svg";
import wbghNgps from "../../Assets/Projects/wgbh-ngps.svg";
import codapCypress from "../../Assets/Projects/codap-cypress.svg";
import codap from "../../Assets/Projects/codap.svg";
import documentationImage from "../../Assets/Projects/internal-documentation.svg";
// Import modal content components

// ...existing code...
export const projects = [
    {
    imgPath: starryNight,
    isBlog: false,
    bannerText: "9.5 Million+ Views",
    title: "TED-Ed",
    description:
      "Many students see math as disconnected from creativity. I wrote scripts for three TED-Ed videos that reveal its role in art, music, and literature, crafting clear, engaging stories that make abstract ideas feel intuitive.",
    demoLink: "https://ed.ted.com/lessons/the-unexpected-math-behind-van-gogh-s-starry-night-natalya-st-clair",
    modalContent: <TEDEdLesson />, 
  },
    {
    imgPath: multiData,
    isBlog: false,
    title: "Navigating Multidimensional Data Structures",
    bannerText: "Best Long Paper Award",
    description:
      "As first author on an award-winning study, I examined how data experts explore unfamiliar datasets. We identified hands-on strategies that can guide the design of tools to help students make sense of complex data.",
    demoLink: "https://doi.org/10.22318/icls2024.613673",
    modalContent: <MultiDataModalContent />, 
  },
  {
    imgPath: mentalCalc,
    isBlog: false,
    bannerText: "NYT Bestselling Books",
    title: "The Art of Mental Calculation",
    description:
      "I illustrated two New York Times bestselling books that make mental math more visual and approachable. Using playful diagrams and clear layouts, I helped turn Dr. Benjamin’s techniques into an intuitive and fun learning experience.",
    demoLink: "https://www.amazon.com/dp/1495219968",
    modalContent: <ArtOfMentalCalc />, 
  },
    {
    imgPath: straightLine,
    isBlog: false,
    title: "But is it supposed to be a straight line?",
    description:
      "Students using classroom sensor tools often struggled to interpret noisy graph data. I led UX research to uncover where interactions broke down and proposed design changes to support graph literacy and smoother analysis.",
    demoLink: "http://dx.doi.org/10.1080/09500693.2023.2260064",
    modalContent: <StraightLine />, 
  },
  {
    imgPath: codapCypress,
    isBlog: false,
    title: "CODAP automation",
    description:
      "Graph features in a classroom data tool were time-consuming to test manually due to custom rendering. I automated testing with Cypress by exposing hidden graph data, and also led usability research based on feedback from real classrooms.",
    ghLink: "https://github.com/concord-consortium/codap/tree/main/v3/cypress/e2e/pixi-interaction",
    modalContent: <AutomationPixiJS />, 
  },
  {
    imgPath: audioTranscriber,
    isBlog: false,
    title: "Audio Transcriber",
    description:
      "To meet strict student privacy requirements, I built a Python toolkit for transcribing classroom video without sending data to the cloud. The tool supports real-time and offline use, making secure, scalable transcription possible for research teams.",
    ghLink: "https://github.com/concord-consortium/audio-transcriber",
    modalContent: <AudioTranscriber />, 
  },
  {
    imgPath: codap,
    isBlog: false,
    title: "CODAP v2 Launch & DSET Conference",
    description:
      "As CODAP v2 neared release, the team needed to build community momentum around data science education. I led the product launch and organized a conference for 100+ educators and developers to share tools and collaborate in person.",
    demoLink: "https://codap.concord.org/dset/index.html",
    modalContent: <DSETConferenceModalContent />,
  },
  {
    imgPath: wbghNgps,
    isBlog: false,
    title: "Next Generation Preschool",
    description:
      "Teachers using tablet-based tools for preschool science needed better support for hands-on, cross-media learning. I ran mixed-methods UX research to uncover workflow challenges and shared design recommendations to improve usability.",
    driveLink:
      "https://drive.google.com/file/d/0BwPizBG8eJiyb1RFTUVIYzgwaE0/view?usp=sharing&resourcekey=0-aGqxlTCJAuNFCBlmF2D0fA",
    demoLink:
      "https://drive.google.com/file/d/0BwPizBG8eJiyTlNDd3g4R3NKNWs/view?usp=sharing&resourcekey=0-94YjkFo5wHg7M7eT5x0BQQ",
    modalContent: <NextGenerationPreschoolModalContent />, 
  },
    {
    imgPath: documentationImage, // (Replace with actual image reference)
    isBlog: false,
    title: "Internal Documentation",
    description:
      "I led an internal documentation effort at The Concord Consortium to make our products more usable for curriculum, research, and product teams. Through screencasts, prompts, and trainings, we transformed internal knowledge into a shared, accessible resource.",
    demoLink: "https://learn.concord.org/help", // Use this if you’d like the Help Center to be linked
    modalContent: <InternalDocumentationModalContent />,
  }
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
              className="modal-overlay"
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
                className="modal-content-scroll modal-content-outer"
                style={{
                  background: "#f5f5f6",
                  padding: 32,
                  borderRadius: 18,
                  width: "90vw",
                  maxWidth: 1600,
                  minWidth: 320,
                  boxShadow: "0 2px 32px rgba(0,0,0,0.18)",
                  position: "relative",
                  animation: "modalUp 0.4s cubic-bezier(.4,1.6,.6,1)",
                  maxHeight: "90vh",
                  overflowY: "auto",
                  paddingRight: 80,
                }}
                onClick={e => e.stopPropagation()}
              >
                {/* Fixed close button inside modal, using absolute positioning relative to modal */}
                <div className="modal-close-btn-wrapper">
                  <button
                    className="modal-close-btn"
                    onClick={handleCloseModal}
                    aria-label="Close"
                  >
                    <IoMdClose />
                  </button>
                </div>
                {/* Removed white gradient overlay for right side readability */}
                <img
                  src={selectedProject.imgPath}
                  alt={selectedProject.title ? selectedProject.title : "Project image"}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '95vh',
                    borderRadius: 8,
                    marginBottom: 16,
                    paddingTop: 32,
                    objectFit: 'contain',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
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
                    <CgWebsite style={{ verticalAlign: 'middle', marginRight: 4 }} />
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
                    <BsGithub style={{ verticalAlign: 'middle', marginRight: 4 }} />
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
                    <DiGoogleDrive style={{verticalAlign: 'middle', marginRight: 4}} />
                    Drive
                  </Button>
                )}
              </div>
              <style>{`
                .modal-overlay {
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100vw;
                  height: 100vh;
                  background: rgba(0,0,0,0.7);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  z-index: 9999;
                  overflow: hidden;
                  backdrop-filter: blur(12px);
                  -webkit-backdrop-filter: blur(12px);
                }
                .modal-content-outer {
                  background: #f5f5f6;
                  padding: 32px;
                  border-radius: 18px;
                  width: 90vw;
                  max-width: 1600px;
                  min-width: 320px;
                  box-shadow: 0 2px 32px rgba(0,0,0,0.18);
                  position: relative;
                  animation: modalUp 0.4s cubic-bezier(.4,1.6,.6,1);
                  max-height: 90vh;
                  overflow-y: auto;
                  padding-right: 80px;
                }
                @keyframes modalUp {
                  0% { transform: translateY(60px) scale(0.98); opacity: 0; }
                  100% { transform: translateY(0) scale(1); opacity: 1; }
                }
                /* Hide scrollbar for modal content */
                .modal-content-scroll {
                  scrollbar-width: none; /* Firefox */
                  -ms-overflow-style: none; /* IE 10+ */
                }
                .modal-content-scroll::-webkit-scrollbar {
                  display: none; /* Chrome/Safari/Webkit */
                }
                /* Apple-style sticky close button wrapper */
                .modal-close-btn-wrapper {
                  background-attachment: scroll;
                  position: sticky;
                  top: -24px;
                  z-index: 9999;
                  width: 140px;
                  height: 0;
                  display: flex;
                  align-items: flex-start;
                  justify-content: flex-end;
                  margin-left: auto;
                  margin-right: -36px;
                  pointer-events: none;
                }
                .modal-close-btn {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-attachment: scroll;
                  width: 22px;
                  height: 22px;
                  min-width: 22px;
                  min-height: 22px;
                  margin-top: 0;
                  margin-right: 0;
                  background: #000;
                  border: none;
                  color: #f5f5f6;
                  font-size: 16px;
                  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
                  font-weight: 400;
                  line-height: 1;
                  letter-spacing: -0.374px;
                  border-radius: 50%;
                  aspect-ratio: 1 / 1;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
                  cursor: pointer;
                  pointer-events: auto;
                  box-sizing: border-box;
                  -webkit-font-smoothing: antialiased;
                  transition: background 0.2s, box-shadow 0.2s;
                  padding: 0;
                }
                .modal-close-btn:hover, .modal-close-btn:focus {
                  background: #f2f2f2;
                  box-shadow: 0 4px 16px rgba(0,0,0,0.16);
                  outline: none;
                }
                @media (max-width: 767px) {
                  .modal-overlay {
                    align-items: stretch;
                    justify-content: stretch;
                    width: 100vw;
                    height: 100vh;
                    overflow: auto;
                  }
                  .modal-content-outer {
                    width: 100vw !important;
                    min-width: 0 !important;
                    max-width: 100vw !important;
                    height: 100vh !important;
                    max-height: none !important;
                    border-radius: 0 !important;
                    padding: 16px 8px 24px 8px !important;
                    box-shadow: none !important;
                    overflow-y: auto !important;
                  }
                  .modal-close-btn-wrapper {
                    top: 0;
                    right: 0;
                    width: 96px;
                    margin-right: -8px;
                  }
                  .modal-close-btn {
                    margin-top: 0;
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