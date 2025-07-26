import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="nstclair-cc"
        blockSize={15}
        blockMargin={5}
        color="#22223b" // darkest color for most activity
        fontSize={16}
        // color for less activity (lightest) to more activity (darkest)
        theme={{
          light: ["#f5f5f6", "#c9c9e3", "#a3a3d1", "#6c6ca8", "#22223b"]
        }}
      />
    </Row>
  );
}

export default Github;
