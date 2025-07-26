import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiPython, DiHtml5, DiPhotoshop, DiMailchimp, DiScrum } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import {
  SiAirtable,
  SiOpenai,
  SiAdobeillustrator,
  SiCypress,
  SiR,
  SiAtlassian,
  SiWordpress
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAirtable />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* SiCursor removed: not available in react-icons */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAtlassian />
      </Col>
            <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
          <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
            <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMailchimp />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
      </Col>
    </Row>
  );
}

export default Techstack;
