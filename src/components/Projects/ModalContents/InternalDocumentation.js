import React from "react";
import headingStyles from "./ModalHeadingStyles";

const InternalDocumentationModalContent = () => (
  <div style={{ textAlign: 'left', fontFamily: 'Raleway, sans-serif' }}>
    <h3 style={headingStyles.h3}>Concord Internal Documentation</h3>
    <hr />
    <div style={{ fontWeight: 'bold', color: '#000' }}>Internal Enablement & Knowledge Management</div>
    <div>2022–2025 (Ongoing)</div>
    <p><em>Built and led a company-wide documentation initiative to improve internal tool usability and cross-team communication</em></p>
    <hr />
    <div><strong style={{ fontWeight: 800 }}>Project Role:</strong> Documentation Lead, Knowledge Facilitator, Internal Trainer</div>
    <div><strong style={{ fontWeight: 800 }}>Platforms:</strong> Google Docs, Google Drawings, Slack, Zoom</div>
    <div><strong style={{ fontWeight: 800 }}>Deliverables:</strong> Centralized internal docs, screencasts, prompt libraries, product training sessions</div>
    <div><strong style={{ fontWeight: 800 }}>Timeline:</strong> 6-month initiative + ongoing support</div>
    <hr />

    <h4 style={headingStyles.h4}>Project Overview</h4>
    <p>
      I led the internal documentation effort at The Concord Consortium to help our curriculum developers, researchers, and product managers better use our own tools. Much of our technical knowledge lived in people’s heads or outdated docs, making it hard for teams to find what they needed without asking around.
    </p>
    <p>
      I created guides for new technologies, built visual how-tos using Google Drawings, recorded screencasts, and organized information into findable formats. I also launched a support Slack channel and ran live training sessions to proactively share knowledge across teams.
    </p>
    <p>
      What started as a quick fix became a culture shift. My work inspired teams in finance, administration, communications, and HR to launch parallel documentation projects, helping transform siloed expertise into shared institutional knowledge.
    </p>

    <h4 style={headingStyles.h4}>Problem Statement</h4>
    <ul>
      <li>How can we reduce friction in tool adoption and knowledge sharing across internal teams?</li>
      <li>What systems and formats best support quick updates, onboarding, and shared understanding?</li>
      <li>How do we ensure that researchers, PIs, and product leads can effectively use our internal platforms and data tools?</li>
    </ul>

    <h4 style={headingStyles.h4}>The Solution</h4>
    <p>
      I developed and organized documentation that was accessible, editable, and easy to update. I wrote how-to guides with screenshots and screencasts, embedded prompt templates for AI tools, and used Google Drawings to visually clarify tech features. I also coordinated regular training sessions and provided live support via Slack.
    </p>
    <p>
      These resources helped internal teams better understand tools like our LMS, analytics platforms, and research data portals, turning one-off questions into reusable documentation and increasing cross-team fluency.
    </p>

    <h4 style={headingStyles.h4}>Aligning Goals</h4>
    <p>
      My goal was to make technical tools more accessible and less intimidating. In doing so, we reduced barriers to adoption, freed up developer time, and enabled teams to focus more on research and design—less on figuring out how things work.
    </p>
    <p>
      The most satisfying result? Watching others pick up the torch—creating their own guides, Slack threads, and templates based on this model.
    </p>

    <h4 style={headingStyles.h4}>Discover</h4>
    <ul>
      <li>Audited gaps in existing documentation across curriculum and product teams</li>
      <li>Interviewed stakeholders to understand frequent pain points and support needs</li>
      <li>Reviewed outdated content and reorganized it for clarity and searchability</li>
    </ul>

    <h4 style={headingStyles.h4}>Define</h4>
    <ul>
      <li>Identified core internal tools (e.g. LMS, research portals) that needed clearer support materials</li>
      <li>Established documentation standards for screenshots, step-by-step breakdowns, and video walkthroughs</li>
      <li>Created an internal Slack channel to answer questions in real time and capture common issues</li>
    </ul>

    <h4 style={headingStyles.h4}>Develop</h4>
    <ul>
      <li>Wrote modular documentation in Google Docs with editable diagrams and embedded screencasts</li>
      <li>Led live internal training sessions for product teams and PIs</li>
      <li>Iterated on documentation based on user questions and feature updates</li>
    </ul>

    <h4 style={headingStyles.h4}>Deliver</h4>
    <ul>
      <li>Enabled faster onboarding and tool adoption across research and curriculum teams</li>
      <li>Inspired parallel documentation efforts across other departments (e.g. HR, Comms, Finance)</li>
      <li>Contributed to learn.concord.org/help and internal process improvements</li>
      <li>Helped create a more transparent, collaborative documentation culture</li>
    </ul>
  </div>
);

export default InternalDocumentationModalContent;