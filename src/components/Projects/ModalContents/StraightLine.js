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
I led the UX research and qualitative analysis for this NSF-funded study, which examined how students interpret real-time graph data during hands-on science experiments. My work focused on surfacing subtle UX breakdowns that hinder students’ ability to make sense of pressure sensor data, especially when those breakdowns go unnoticed by teachers or researchers in the moment.
</p>
<p>
Working closely with two senior research scientists, I analyzed more than 100 hours of classroom footage and student artifacts to identify patterns of misunderstanding rooted in graph scale and framing. This work culminated in a citable open-access paper, and helped shape future design decisions in CODAP and its instructional materials.
</p>

<h4 style={headingStyles.h4}>Problem Statement</h4>
<ul>
  <li>How do students interpret real-time graphing data during open-ended experimentation in biology class?</li>
  <li>What invisible UX challenges emerge when students engage with complex sensor tools and digital graphs?</li>
  <li>How can qualitative research help us improve the design and scaffolding of data tools like CODAP in classrooms?</li>
</ul>

<h4 style={headingStyles.h4}>The Solution</h4>
<p>
We conducted a multi-modal case study in a high school biology class using pressure sensors and CODAP. I analyzed screencasts, class video, graphs, written work, and teacher interviews to trace where and how students got stuck. A key finding: students often misread flat lines as “no change,” not because of conceptual gaps, but because of subtle interface choices in graph scaling and feedback.
</p>
<p>
These insights informed both the CODAP platform’s interface updates and the design of teacher-facing supports for graph interpretation.
</p>

<h4 style={headingStyles.h4}>Aligning Goals</h4>
<p>
My goal was to help the team notice what typical assessments often miss: the real-time moments when students hesitate, get confused, or misread data. This project helped me get comfortable working across messy, multi-modal data and strengthened my drive to design tools that make data literacy more accessible to all learners.
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