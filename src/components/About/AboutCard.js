import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="aboutcard-left-align">
            Hi! I'm <span className="purple">Natalya St. Clair</span>, a product and project manager with a background in QA, UX research, and math education. I’m based in the <span className="purple">East Bay</span> and have spent the last decade working in data-science education and edtech.
            <br /><br />
            I earned my Master's in Education Technology from Harvard and a Bachelor's in Mathematics and Studio Art from Scripps College. That mix of math, design, and learning science shows up in almost everything I do, whether it’s debugging a test, planning a release, or helping a team reason through a tricky user flow.
            <br /><br />
            Outside of work, I'm usually playing a board game (I’ve even gone to board game conventions), hiking through redwoods, or planning my next national park trip. I’ve visited 35 so far (Yosemite will always be a favorite, but Great Basin in Nevada deserves more love).
            <br /><br />
            I also care deeply about sustainability and environmental justice, and I stay grounded through meditation, yoga, and a steady journaling habit.
          </p>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
