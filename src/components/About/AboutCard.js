import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
            <p className="aboutcard-left-align">
              Hi! I'm <span className="purple">Natalya St. Clair</span>, a UX researcher, Project Manager, and educator specializing in EdTech and math education, based in the <span className="purple">East Bay Area of San Francisco</span>.
              <br /><br />
              I earned my Master's in Education Technology from Harvard and a Bachelor's in Mathematics and Studio Art from Scripps College, blending math education with creative problem-solving.
              <br /><br />
              In my free time, you’ll usually find me deep in a board game (I’ve even attended board game conventions), hiking in a redwood forest, or planning my next trip to a US national park. I've visited 35 and counting: Yosemite still takes my breath away, but Great Basin in Nevada is a hidden gem.
              <br /><br />
              I'm also passionate about sustainability and environmental justice, and I ground myself through mindfulness practices like meditation, yoga, and journaling.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
