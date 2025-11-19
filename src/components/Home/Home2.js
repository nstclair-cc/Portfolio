import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiResearchgate, SiTwitter } from "react-icons/si";

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
                <p className="home-about-body">
                I work across product, QA, and UX research to help teams build learning tools that teachers and students can rely on. My work usually sits where research, technical quality, and clear project execution meet.
                <br /><br />
                My background spans <b className="purple">UX research, QA automation, and classroom-facing product work</b>. I’ve helped build data-science tools used by over a million learners, created automated tests that prevented thousands of bugs from reaching classrooms, and led research on how students reason with complex visualizations.
                <br /><br />
                My training blends <i><b className="purple">math, art, and code</b></i>. I also wrote and produced a series of TED-Ed math animations that have reached more than <b className="purple">9 million viewers</b>.
                <br /><br />
                I’m most motivated by projects that help people learn something challenging or solve a real classroom need. Right now, I’m looking for <b className="purple">Project or Program Management</b> roles in mission-driven edtech or AI-for-learning organizations where I can combine UX research, QA, and steady product execution to support reliable, human-centered tools.
              </p>
            </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex flex-column align-items-center">
            <div className="home-about-social mt-4">
              <h1 data-aos="fade-up">FIND ME ON</h1>
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
                    href="https://x.com/natalyastclair"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <SiTwitter />
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