import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
            <p className="aboutcard-left-align">
              Hi! I'm <span className="purple">Natalya St. Clair</span>, a UX researcher, educator, and problem-solver based in the <span className="purple">East Bay Area of San Francisco</span>.
              <br /><br />
              I earned my Master's in Education Technology from Harvard and a Bachelor's in Mathematics and Studio Art from Scripps College. But beyond degrees and job titles, I'm someone who’s always been drawn to the intersection of creativity, logic, and meaningful connection.
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
