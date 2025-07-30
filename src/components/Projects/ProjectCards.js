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
      {/* Optional top banner */}
      {props.bannerText && (
        <div
          className="project-card-banner"
          style={{
            position: 'absolute',
            top: 0,
            left: '-10px',
            width: 'calc(100% + 20px)',
            zIndex: 2,
            height: 40,
            background: props.bannerColor || '#EDBA19',
            color: '#fff',
            fontWeight: 700,
            fontSize: 16,
            textAlign: 'center',
            lineHeight: '40px',
            margin: 0,
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            letterSpacing: 1,
            textShadow: '0 1px 2px rgba(0,0,0,0.10)',
            borderRadius: '8px 8px 0 0',
            pointerEvents: 'none',
            userSelect: 'none',
            overflow: 'visible',
            display: 'block',
          }}
        >
          {props.bannerText}
          {/* Ribbon triangle left */}
          <span style={{
            position: 'absolute',
            left: 0,
            bottom: -10,
            width: 0,
            height: 0,
            borderTop: '10px solid #cd8d11',
            borderLeft: '10px solid transparent',
            content: '""',
            display: 'block',
          }} />
          {/* Ribbon triangle right */}
          <span style={{
            position: 'absolute',
            right: 0,
            bottom: -10,
            width: 0,
            height: 0,
            borderTop: '10px solid #cd8d11',
            borderRight: '10px solid transparent',
            content: '""',
            display: 'block',
          }} />
        </div>
      )}
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

