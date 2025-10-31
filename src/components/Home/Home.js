import React from "react";
import { projects } from "../Projects/Projects";
import ProjectCard from "../Projects/ProjectCards";
import { Button } from "react-bootstrap";
import { DiGoogleDrive } from "react-icons/di";
import { IoMdClose } from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import womanComputer from "../../Assets/avatar.jpg";
import AOS from "aos";
import "aos/dist/aos.css";


function Home() {
  const [selectedProject, setSelectedProject] = React.useState(null);
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);
  // Helper to open modal with project details
  const handleProjectClick = (project) => {
    setSelectedProject({ ...project });
  };

  // Helper to close modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Natalya St. Clair",
          "jobTitle": "Product Manager",
          "description": "Product Management – Natalya St. Clair. Human-Centered AI, EdTech, data visualization, QA automation, portfolio, case study, research, insights, stakeholder, usability, mixed methods.",
          "alumniOf": "Harvard University",
          "email": "mailto:natalya.stclair@gmail.com",
          "url": "https://natalyastclair.vercel.app/",
          "image": "https://raw.githubusercontent.com/nstclair-cc/Portfolio/master/Images/avatar.png",
          "sameAs": [
            "https://www.linkedin.com/in/natalyastclair/",
            "https://github.com/nstclair-cc",
            "https://natalyastclair.vercel.app/"
          ]
        }
        `}
      </script>
      <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <div style={{ padding: 50, textAlign: "left" }}>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hello! My name is Natalya St. Clair.
                </h1>
                <h2 style={{ paddingBottom: 15 }} className="heading">
                    I’m a <strong>Project Manager</strong> with a background in <strong>QA</strong> and <strong>UX Research</strong> who builds human-centered AI tools for learning.
                </h2>
                <h2 className="heading">
                 With more than nine years in data-science education, and a background as a math educator, I bring experience in product strategy, QA automation, and coding to create intuitive tools that help teachers teach and students learn.
                </h2>
              </div>


            </Col>
            <Col
              md={5}
              className="home-image-col"
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
                <img
                  src={womanComputer}
                  alt="woman at computer"
                  className="img-fluid"
                  style={{
                  maxHeight: "400px",
                  width: "100%",
                  objectFit: "contain",
                  transition: "transform 0.2s"
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Featured Projects Preview */}
      <Container className="home-projects-preview" style={{ marginTop: 40, marginBottom: 40 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 24 }} data-aos="fade-up">
          Featured Projects
        </h2>
        <p>
          My work spans EdTech, math education, and enterprise platforms, helping organizations deliver engaging, accessible learning experiences powered by human-centered data science and AI.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.slice(0, 6).map((project, idx) => (
            <Col md={4} className="project-card" key={project.title + "-preview-" + idx}>
              <ProjectCard
                {...project}
                onOpenModal={() => handleProjectClick(project)}
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
                  <h3
                    onClick={e => {
                      e.stopPropagation();
                      handleProjectClick(project);
                    }}
                    style={{ cursor: 'pointer', marginBottom: 8 }}
                  >
                    {project.title}
                  </h3>
                )}
              />
            </Col>
          ))}
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
          <a href="/project" style={{ textDecoration: 'none' }}>
            <button
              className="explore-projects-btn"
            >
              Explore more projects
            </button>
          </a>
        </div>
      </Container>
      {/* Modal overlay for project details (copied from Projects.js) */}
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
            overflow: "hidden",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)"
          }}
          onClick={handleCloseModal}
        >
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
            <div className="modal-close-btn-wrapper">
              <button
                className="modal-close-btn"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                <IoMdClose />
              </button>
            </div>
            <img
              src={selectedProject.imgPath}
              alt={selectedProject.title ? selectedProject.title : "Project image"}
              style={{
                width: "100%",
                maxWidth: "800px",
                maxHeight: "500px",
                borderRadius: 8,
                marginBottom: 16,
                paddingTop: 32,
                objectFit: "contain",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
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
            .modal-content-scroll {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .modal-content-scroll::-webkit-scrollbar {
              display: none;
            }
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
      <div>
        <Home2 />
      </div>
               {/* View Recommendations button below Home2 */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32, marginBottom: 48 }}>
              <a href="/recommendations" style={{ textDecoration: 'none' }}>
                <button className="explore-projects-btn">
                  View Recommendations
                </button>
              </a>
            </div>
    </section>
    </>
  );
}

export default Home;

