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
                I help teams make tools that are easier to use and easier to understand—especially in education, data, and research.
                <br />
                <br />
                My background includes <b className="purple">User Experience research, Quality Assurance testing, and curriculum design</b>. I’ve worked on classroom tools, helped students make sense of real-time graphs, and built systems to catch bugs before they reach users.
                <br />
                <br />
                I come from a mix of <i><b className="purple">math, art, and tech</b></i>, and I like projects where clear thinking and good design go hand in hand.
                <br />
                <br />
                I’m especially drawn to work that helps people learn something new or solve a problem that matters.
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