import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { DiGoogleDrive } from "react-icons/di";

import { RxOpenInNewWindow } from "react-icons/rx";

function ProjectCards(props) {
  // Handler for card click, only trigger if not clicking a button or link
  const handleCardClick = e => {
    // Prevent modal open if a button or link inside the card is clicked
    if (
      e.target.closest('button') ||
      e.target.closest('a')
    ) {
      return;
    }
    if (props.onOpenModal) props.onOpenModal();
  };
  return (
    <Card
      className="project-card-view"
      style={{ position: 'relative', cursor: 'pointer' }}
      onClick={handleCardClick}
    >
      {/* Use custom renderImage if provided, else default */}
      {props.renderImage ? (
        props.renderImage()
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body className="project-card-body">
        {/* Use custom renderTitle if provided, else default */}
        {props.renderTitle ? (
          props.renderTitle()
        ) : (
          <Card.Title>{props.title}</Card.Title>
        )}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="card-btn-row">
          {/* GitHub button only if ghLink is provided */}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" style={{ marginRight: "10px" }}>
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {/* Demo button */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginRight: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
          {/* Google Drive button */}
          {props.driveLink && (
            <Button
              variant="primary"
              href={props.driveLink}
              target="_blank"
              style={{ marginRight: "10px" }}
            >
              <DiGoogleDrive /> &nbsp;
              {"Drive"}
            </Button>
          )}
          {/* Open in Modal button (last, all black) */}
          <Button
            variant="primary"
            onClick={e => {
              e.stopPropagation();
              if (props.onOpenModal) props.onOpenModal();
            }}
            style={{ marginRight: "10px" }}
          >
            <RxOpenInNewWindow style={{ fontSize: 18, verticalAlign: 'middle' }} /> &nbsp;Open
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

