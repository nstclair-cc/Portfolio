import React from "react";
import headingStyles from "./ModalHeadingStyles";

const StraightLineModalContent = () => (
  <div style={{ textAlign: 'left', fontFamily: 'Raleway, sans-serif' }}>
    <h3 style={headingStyles.h3}>But Is It Supposed to Be a Straight Line?</h3>
    <hr />
    <div style={{ fontWeight: 'bold', color: '#000' }}>UX Research, Learning Sciences, and Data Visualization</div>
    <div>2018–2023</div>
    <p><em>Longitudinal classroom-based study on students’ interpretation of real-time graphs and data during open-ended science inquiry</em></p>
    <hr />
    <div><strong style={{ fontWeight: 800 }}>Project Role:</strong> UX Researcher, Qualitative Analyst, Project Manager</div>
    <div><strong style={{ fontWeight: 800 }}>Platforms:</strong> CODAP, Adobe Photoshop, Transana, custom online portals</div>
    <div><strong style={{ fontWeight: 800 }}>Deliverables:</strong> Peer-reviewed paper in the International Journal of Science Education (2024), national conference talks</div>
    <div><strong style={{ fontWeight: 800 }}>Timeline:</strong> 5 years (3 years data collection + classroom visits, 2 years analysis & publication)</div>
    <hr />

    <h4 style={headingStyles.h4}>Project Overview</h4>
    <p>
      As part of the $5M NSF-funded InquirySpace II project, this study explored how ninth-grade students interpreted real-time sensor data in a web-based science inquiry environment. We focused specifically on how students made sense of pressure sensor graphs — and the hidden UX and scaling challenges they faced that teachers and researchers didn’t notice in the moment.
    </p>
    <p>
      I led qualitative research and analysis for this study, working alongside senior researchers to synthesize hundreds of hours of classroom data into a widely cited open-source research paper. This work was conducted just before the COVID-19 shift to remote learning, capturing one of the last in-person classroom datasets of the grant.
    </p>

    <h4 style={headingStyles.h4}>Problem Statement</h4>
    <ul>
      <li>How do students interpret real-time graphing data during open-ended experimentation in biology class?</li>
      <li>What invisible UX challenges emerge when students engage with complex sensor tools and digital graphs?</li>
      <li>How can qualitative research help us improve the design and scaffolding of data tools like CODAP in classrooms?</li>
    </ul>

    <h4 style={headingStyles.h4}>The Solution</h4>
    <p>
      We conducted an embedded case study of one classroom using pressure sensors during an inquiry biology unit. Over 65 student screencasts, 5 whole-class video sessions, CODAP artifacts, teacher debriefs, and daily field notes were coded and analyzed using Transana. A key finding was that students were misinterpreting graph scale and slope — not due to conceptual misunderstanding, but due to subtle issues in the graph’s UX and framing.
    </p>
    <p>
      This insight became a cornerstone of our 2024 IJSE paper and influenced how we later designed scaffolds in both the CODAP platform and teacher-facing instructional guides.
    </p>

    <h4 style={headingStyles.h4}>Aligning Goals</h4>
    <p>
      My goal was to help the team surface the hidden struggles that students experience when interpreting data in real time. These issues aren’t always caught in post-tests or multiple-choice assessments — they show up in interaction, hesitation, and group problem-solving dynamics.
    </p>
    <p>
      This project also trained me to manage complex, multi-modal data across time, tools, and settings — and reinforced my commitment to equitable, accessible STEM learning design.
    </p>

    <h4 style={headingStyles.h4}>Discover</h4>
    <ul>
      <li>Reviewed over 100+ hours of screencast and classroom video data</li>
      <li>Used Transana for micro-level qualitative coding and visualization of data-use behaviors</li>
      <li>Analyzed student artifacts across platforms: CODAP graphs, written notebooks, and portal-based responses</li>
      <li>Conducted daily teacher debriefs and post-unit interviews to understand classroom patterns</li>
    </ul>

    <h4 style={headingStyles.h4}>Define</h4>
    <ul>
      <li>Identified a recurring challenge where students misunderstood whether a flat line meant “no change” — a UX problem rooted in graph scaling</li>
      <li>Surfaced a gap in scaffold design around interpreting small data changes in real-time experiments</li>
      <li>Captured one of the final in-person classroom implementations before the COVID-19 shift to remote learning</li>
    </ul>

    <h4 style={headingStyles.h4}>Develop</h4>
    <ul>
      <li>Wrote and revised manuscripts in collaboration with senior researchers</li>
      <li>Managed coordination of complex research assets across teams and tools</li>
      <li>Helped shape follow-up studies and teacher materials based on this case</li>
    </ul>

    <h4 style={headingStyles.h4}>Deliver</h4>
    <ul>
      <li>Published <em>“But Is It Supposed to Be a Straight Line?”</em> in the International Journal of Science Education (2024)</li>
      <li>Presented at national learning sciences conferences</li>
      <li>Influenced future classroom design of CODAP sensor tools and visual scaffolds</li>
      <li>Gained deep respect for the “hidden UX” of scientific data in classroom practice</li>
    </ul>
  </div>
);

export default StraightLineModalContent;