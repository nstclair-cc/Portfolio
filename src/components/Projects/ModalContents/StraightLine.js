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
  I led UX research and qualitative analysis for this NSF-funded study examining how students interpret real-time graph data during hands-on science experiments. My focus was on uncovering subtle UX breakdowns that interfere with data interpretation—especially ones that teachers or researchers often miss in the moment.
  </p>
  <p>
  Working alongside two senior research scientists, I analyzed over 100 hours of classroom footage and student artifacts to trace patterns of misunderstanding rooted in graph scale and visual feedback. The findings were published in a peer-reviewed open-access paper and helped guide future design decisions for CODAP and related instructional supports.
  </p>

  <h4 style={headingStyles.h4}>The Solution</h4>
  <p>
  We conducted a multi-modal case study in a high school biology class using pressure sensors and CODAP. I analyzed screencasts, classroom video, graphs, written work, and teacher interviews to trace where students got stuck. A key finding: students often mistook flat lines for “no change,” not due to conceptual errors, but because of subtle issues in scaling and interface feedback.
  </p>
  <p>
  These insights directly informed updates to the CODAP interface and shaped new scaffolds in teacher-facing materials to better support graph interpretation.
  </p>

  <h4 style={headingStyles.h4}>Aligning Goals</h4>
  <p>
  My goal was to help the team recognize what traditional assessments often overlook: the in-the-moment ways students hesitate, misread, or struggle with data. This project gave me experience working across messy, multi-modal datasets and strengthened my commitment to designing tools that support accessible, equity-centered STEM learning.
  </p>

  <h4 style={headingStyles.h4}>Discover</h4>
  <ul>
    <li>Reviewed 100+ hours of screencast and classroom video</li>
    <li>Used Transana for fine-grained qualitative coding of interaction behaviors</li>
    <li>Analyzed student-created artifacts: graphs, notebooks, and online responses</li>
    <li>Facilitated teacher debriefs and post-unit interviews to capture classroom context</li>
  </ul>

  <h4 style={headingStyles.h4}>Define</h4>
  <ul>
    <li>Identified recurring confusion around flat lines and graph scale interpretation</li>
    <li>Mapped student struggles to UX design gaps in real-time data tools</li>
    <li>Captured critical insights from a pre-pandemic in-person dataset</li>
  </ul>

  <h4 style={headingStyles.h4}>Develop</h4>
  <ul>
    <li>Co-authored and revised research manuscripts with the team</li>
    <li>Coordinated assets across video, coding, and artifact analysis</li>
    <li>Helped shape future classroom studies and teacher supports</li>
  </ul>

  <h4 style={headingStyles.h4}>Deliver</h4>
  <ul>
    <li>Published <em>“But Is It Supposed to Be a Straight Line?”</em> in IJSE (2024)</li>
    <li>Presented findings at national learning sciences conferences</li>
    <li>Informed CODAP design updates for data graphing and scaffolding</li>
    <li>Elevated the importance of “hidden UX” in classroom science tools</li>
  </ul>
    </div>
);

export default StraightLineModalContent;