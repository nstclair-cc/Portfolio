import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiPython, DiHtml5, DiPhotoshop, DiScrum } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import {
  SiAirtable,
  SiClaude,
  SiAdobeillustrator,
  SiCypress,
  SiR,
  SiAtlassian,
  SiWordpress
} from "react-icons/si";
import SkillIcon, { PlaywrightIcon } from "./SkillIcon";

const skills = [
  { name: "Airtable", icon: SiAirtable },
  { name: "HTML5", icon: DiHtml5 },
  { name: "Claude", icon: SiClaude },
  { name: "JavaScript", icon: DiJavascript1 },
  { name: "Playwright", icon: PlaywrightIcon },
  { name: "Cypress", icon: SiCypress },
  { name: "R", icon: SiR },
  { name: "Python", icon: DiPython },
  { name: "GitHub", icon: AiFillGithub },
  { name: "Atlassian", icon: SiAtlassian },
  { name: "React", icon: DiReact },
  { name: "WordPress", icon: SiWordpress },
  { name: "Adobe Photoshop", icon: DiPhotoshop },
  { name: "Adobe Illustrator", icon: SiAdobeillustrator },
  { name: "Scrum", icon: DiScrum },
];

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "16px" }}>
        <Col xs={12} style={{ marginBottom: "24px", textAlign: "left" }}>
          <div className="techstack-keywords" style={{ fontSize: "1.1em", color: "#222" }}>
            <strong>Skills:</strong> JavaScript, React, Python, HTML5, CSS, Playwright, Cypress, R, GitHub, Atlassian, WordPress, Airtable, Claude, vibe coding, Adobe Photoshop, Adobe Illustrator, Scrum, UX Research, QA Automation, Data Visualization, Curriculum Design
          </div>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {skills.map((s) => (
          <SkillIcon key={s.name} name={s.name} icon={s.icon} />
        ))}
      </Row>
    </>
  );
}

export default Techstack;
