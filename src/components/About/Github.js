import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function Github() {
  React.useEffect(() => {
    return () => {
      // cleanup if needed
    };
  }, []);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", flexDirection: "column", alignItems: "center" }}>
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
      <div style={{ marginTop: 24, textAlign: "center" }}>
        <Button
          variant="primary"
          href="https://github.com/nstclair-cc"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: 12, fontWeight: 600, fontSize: 18, display: 'inline-flex', alignItems: 'center' }}
        >
          <BsGithub style={{ verticalAlign: 'middle', marginRight: 8, fontSize: 22 }} />
          View my GitHub
        </Button>
      </div>
    </Row>
  );
}

export default Github;
