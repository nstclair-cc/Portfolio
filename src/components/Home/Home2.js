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
            I design and build tools that help people think more clearly—especially in education, data, and research.
            <br />
            <br />
            My work spans <b className="purple">UX research, QA automation, and curriculum design</b>. I've built classroom data tools used by millions of students, created test systems that caught thousands of bugs before they reached users, and helped teams understand how learners reason with complex visualizations.
            <br />
            <br />
            My background blends <i><b className="purple">math, art, and code</b></i>—a perspective that helps me approach problems both creatively and systematically. I’m also the co-creator of a series of animated math lessons that have reached over <b className="purple">9 million viewers</b> on TED-Ed.
            <br />
            <br />
            I care most about projects that help people learn something new, understand something hard, or solve a problem that matters.
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