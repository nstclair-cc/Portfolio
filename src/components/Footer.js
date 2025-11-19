import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Created by Natalya St. Clair using React.js</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} NSC</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/nstclair-cc"
                style={{ color: "#000", fontSize: "1.1em" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile of Natalya St. Clair"
              >
                <AiFillGithub />
                <span style={{ fontSize: "0.8em", marginLeft: 4 }} className="sr-only">GitHub</span>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/natalyastclair"
                style={{ color: "#000", fontSize: "1.1em" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile of Natalya St. Clair"
              >
                <AiOutlineTwitter />
                <span style={{ fontSize: "0.8em", marginLeft: 4 }} className="sr-only">Twitter</span>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/natalyastclair/"
                style={{ color: "#000", fontSize: "1.1em" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile of Natalya St. Clair"
              >
                <FaLinkedinIn />
                <span style={{ fontSize: "0.8em", marginLeft: 4 }} className="sr-only">LinkedIn</span>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
