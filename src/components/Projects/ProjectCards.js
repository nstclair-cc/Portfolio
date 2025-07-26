import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { DiGoogleDrive } from "react-icons/di";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Use custom renderImage if provided, else default */}
      {props.renderImage ? (
        props.renderImage()
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body>
        {/* Use custom renderTitle if provided, else default */}
        {props.renderTitle ? (
          props.renderTitle()
        ) : (
          <Card.Title>{props.title}</Card.Title>
        )}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* GitHub button only if ghLink is provided */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* Demo button */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
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
            style={{ marginLeft: "10px" }}
          >
            <DiGoogleDrive /> &nbsp;
            {"Drive"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

