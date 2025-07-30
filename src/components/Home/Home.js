import { projects } from "../Projects/Projects";
import ProjectCard from "../Projects/ProjectCards";

import React from "react";
import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import womanComputer from "../../Assets/avatar.png";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NATALYA ST. CLAIR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col
              md={5}
              className="home-image-col"
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Tilt>
                <img
                  src={womanComputer}
                  alt="woman at computer"
                  className="img-fluid"
                  style={{
                  maxHeight: "400px",
                  width: "100%",
                  objectFit: "contain",
                  transform: "scale(0.9)",
                  transition: "transform 0.2s"
                }}
              />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Featured Projects Preview */}
      <Container className="home-projects-preview" style={{ marginTop: 40, marginBottom: 40 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 24 }}>Recent Projects</h2>
        <Row style={{ justifyContent: "center" }}>
          {projects.slice(0, 4).map((project, idx) => (
            <Col md={6} lg={3} key={project.title + "-preview-" + idx} style={{ marginBottom: 24 }}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
          <a href="/project" style={{ textDecoration: 'none' }}>
            <button
              style={{
                background: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: '12px 32px',
                fontWeight: 600,
                fontSize: 18,
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                cursor: 'pointer',
                transition: 'background 0.2s, box-shadow 0.2s',
                letterSpacing: 0.5,
              }}
              onMouseOver={e => { e.currentTarget.style.background = '#222'; }}
              onMouseOut={e => { e.currentTarget.style.background = '#000'; }}
            >
              Explore more projects
            </button>
          </a>
        </div>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

