
import React from "react";
import headingStyles from "./ModalHeadingStyles";

const MultiDataModalContent = () => (
  <div style={{ textAlign: 'left', fontFamily: 'Raleway, sans-serif' }}>
    <h3 style={headingStyles.h3}>Multidimensional Data Study</h3>
    <hr />
    <div style={{ fontWeight: 'bold', color: '#000' }}>UX Research & Data Strategy</div>
    <div>Fall 2023 to Summer 2024</div>
    <p><em>Award-winning paper exploring how data experts make sense of unfamiliar multidimensional datasets</em></p>
    <hr />
    <div><strong style={{ fontWeight: 800 }}>Project Role:</strong> UX Researcher / Research Associate / Project Manager (First Author)</div>
    <div><strong style={{ fontWeight: 800 }}>Platforms:</strong> CODAP (Common Online Data Analysis Platform), Zoom, Auto Transcriber</div>
    <div><strong style={{ fontWeight: 800 }}>Deliverables:</strong> Expert interview transcripts, cross-sector analysis, award-winning ISLS conference paper</div>
    <div><strong style={{ fontWeight: 800 }}>Timeline:</strong> 3 months research + 6 weeks writing</div>
    <hr />
    <h4 style={headingStyles.h4}>Project Overview</h4>
    <p>
    As first author, I helped carry out a study of how data experts approach unfamiliar multidimensional datasets. I conducted interviews, analyzed transcripts, and led the writing of the final paper. The study design was part of the $3 million NSF <a href="https://concord.org/our-work/research-projects/multidata/" target="_blank">MultiData Data Project</a>.
    </p>
    <p>
    Together, we uncovered expert strategies for structuring complex data—insights that later shaped both student-facing research and interface design in CODAP. Our paper received an Outstanding Paper Award at the 2024 International Society of the Learning Sciences (ISLS) conference.
    </p>

    <h4 style={headingStyles.h4}>Problem Statement</h4>
    <ul>
      <li>How do data experts from various fields approach unfamiliar multidimensional datasets?</li>
      <li>What interaction patterns emerge when they create, manipulate, and structure data tables?</li>
      <li>What patterns emerge in how they create, manipulate, and structure data tables, and how can these insights inform design improvements for students learning to analyze data in digital tools like CODAP?</li>
    </ul>

    <h4 style={headingStyles.h4}>The Solution</h4>
    <p>
      Through ten think-aloud interviews, we identified key patterns in expert approaches to structuring multidimensional data. While we expected more hierarchical visualizations, most experts began with flat tables and adapted as needed:
    </p>
    <ul>
      <li>Some used subsets or extracted elements to create hierarchy</li>
      <li>Others built out relational databases from large or unwieldy tables</li>
      <li>A few worked entirely within flat formats while mentally modeling complexity</li>
    </ul>
    <p>
      These findings reshaped how our team thought about student-facing data layouts and directly informed a subsequent student study within a $3M NSF-funded research initiative.
    </p>

    <h4 style={headingStyles.h4}>Aligning Goals</h4>
    <p>
    This project helped me grow as a researcher: I learned how to design and facilitate expert interviews, distill complex workflows into actionable insights, and collaborate across roles to influence both product and research directions.
    </p>
    <p>
    It also deepened my belief that studying expert behavior—often overlooked in education research—can powerfully inform how we design tools for learners. This work laid the groundwork for more iterative, insight-driven design cycles within our team.
    </p>

    <h4 style={headingStyles.h4}>Discover</h4>
    <ul>
      <li>Interviewed 10 data experts from academic, nonprofit, and industry backgrounds</li>
      <li>Developed and iterated on an interview protocol rooted in qualitative design research</li>
      <li>Used transcription tools and open coding to analyze expert reasoning about table structures, hierarchy, and relational modeling</li>
      <li>Segmented data by sector, organization size, and tool usage (e.g., R, Excel, CODAP, relational DBs)</li>
    </ul>

    <h4 style={headingStyles.h4}>Define</h4>
    <ul>
      <li>Experts overwhelmingly began by scanning flat tables and mentally organizing subsets before formalizing hierarchy</li>
      <li>Analysts adapted their strategies based on tool familiarity, data complexity, and domain expectations</li>
      <li>Early quotes pulled from these interviews shaped our later work with students and influenced how we introduced hierarchy and structure in CODAP’s design</li>
    </ul>

    <h4 style={headingStyles.h4}>Develop</h4>
    <ul>
      <li>Led data segmentation and synthesis for team use across roles and product decisions</li>
      <li>Extracted key quotes and narratives that guided later student protocol design</li>
      <li>Worked closely with two senior researchers to frame findings and co-author our ISLS submission</li>
    </ul>

    <h4 style={headingStyles.h4}>Deliver</h4>
    <ul>
      <li>First author on an <a href="https://2024.isls.org/outstanding-paper-awards/" target="_blank" rel="noopener noreferrer">award-winning paper presented at ISLS 2024</a></li>
      <li>Findings directly shaped a later student interview study focused on how learners structure and analyze data</li>
      <li>Established a new research precedent for incorporating expert workflows into early design and evaluation cycles</li>
      <li>Helped inform UX and layout recommendations for multidimensional table structures in the CODAP platform</li>
    </ul>
  </div>
);

export default MultiDataModalContent;