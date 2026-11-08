import React from "react";
import { Row } from "react-bootstrap";
import { SiSlack, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiApple, DiGoogleDrive } from "react-icons/di";
import SkillIcon from "./SkillIcon";

const tools = [
  { name: "macOS", icon: DiApple },
  { name: "VS Code", icon: VscVscode },
  { name: "Google Drive", icon: DiGoogleDrive },
  { name: "Slack", icon: SiSlack },
  { name: "Vercel", icon: SiVercel },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((t) => (
        <SkillIcon key={t.name} name={t.name} icon={t.icon} />
      ))}
    </Row>
  );
}

export default Toolstack;
