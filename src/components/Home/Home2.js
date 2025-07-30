import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
          <Col md={8} className="home-about-description d-flex flex-column align-items-center">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body text-center">
              I’m a UX researcher, educator, and QA engineer passionate about making tools that help people think, learn, and solve meaningful problems.
              <br />
              <br />
              Whether it’s automating workflows in <b className="purple">data science education</b>, researching how students interpret real-time graphs, or launching open-source tools for classrooms, I focus on clarity, accessibility, and real-world impact.
              <br />
              <br />
              My background bridges <i><b className="purple">math, art, and technology</b></i> — and I’m happiest working on interdisciplinary teams where curiosity, creativity, and thoughtful design meet.
              <br />
              <br />
              I’m drawn to projects that support people and the planet, whether that’s helping students make sense of data, supporting researchers with better tooling, or building experiences that make complexity easier to navigate.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex flex-column align-items-center">
            <div className="home-about-social mt-4">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links d-flex justify-content-center">
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/natalyastclair/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://github.com/nstclair-cc"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.researchgate.net/profile/Natalya-St-Clair"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <SiResearchgate />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;