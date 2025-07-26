import React from "react";
import headingStyles from "./ModalHeadingStyles";

const CODAPAutomationModalContent = () => (
  <div style={{ textAlign: 'left', fontFamily: 'Raleway, sans-serif' }}>
    <h3 style={headingStyles.h3}>CODAP Automation Tool</h3>
    <hr />
    <div style={{ fontWeight: 'bold', color: '#000' }}>QA Engineering & Test Automation</div>
    <div>2–3 weeks (2024)</div>
    <p><em>Built a breakthrough Cypress testing tool to automate graph validation for a data analysis platform used in STEM education</em></p>
    <hr />
    <div><strong style={{ fontWeight: 800 }}>Project Role:</strong> QA Engineer</div>
    <div><strong style={{ fontWeight: 800 }}>Platforms:</strong> Cypress, JavaScript, GitHub, PixiJS</div>
    <div><strong style={{ fontWeight: 800 }}>Deliverables:</strong> 20+ graph automation tests integrated into weekly builds</div>
    <div><strong style={{ fontWeight: 800 }}>Timeline:</strong> 2–3 weeks (initial build; ongoing maintenance)</div>
    <hr />

    <h4 style={headingStyles.h4}>Project Overview</h4>
    <p>
      As part of the QA team for CODAP — an open-source data analysis platform used in classrooms — I created the first automated tests for verifying graph functionality in the app. CODAP’s graphs are rendered using PixiJS, which draws visuals on a canvas that Cypress can’t normally access via the DOM.
    </p>
    <p>
      My solution was to wrap the internal PixiJS graph data in JavaScript and expose it to Cypress, enabling our test suite to read and validate visual graph structures. The outcome: 20+ end-to-end tests now run automatically in every weekly build of CODAP v3, reducing regression bugs and increasing QA confidence.
    </p>

    <h4 style={headingStyles.h4}>Problem Statement</h4>
    <ul>
      <li>How can we automate regression tests for dynamic graphs when the visuals are rendered in a DOM-invisible canvas?</li>
      <li>What’s the best way to expose PixiJS internals to a testing framework like Cypress?</li>
    </ul>

    <h4 style={headingStyles.h4}>The Solution</h4>
    <p>
      I researched a workaround that allowed us to access PixiJS graph objects by wrapping their internal arrays and exposing them to Cypress. Working closely with a senior developer, we implemented a custom JavaScript layer that surfaced the data points we needed. This allowed us to run true E2E tests on graph behavior — something that wasn’t previously possible.
    </p>
    <p>
      The tests now verify correct graph rendering, layout, and stability across builds — especially in key areas prone to regression bugs.
    </p>

    <h4 style={headingStyles.h4}>Aligning Goals</h4>
    <p>
      We were facing repeated bugs in graph rendering, and our existing QA framework couldn’t detect issues in the canvas layer. This automation project filled a critical gap in our regression coverage and continues to scale.
    </p>
    <p>
      The bigger impact is that we now have a growing suite of reliable tests around CODAP’s most used features — a major quality win for the team and users.
    </p>

    <h4 style={headingStyles.h4}>Discover</h4>
    <ul>
      <li>Audited the QA pipeline and identified graphs as the biggest regression risk area</li>
      <li>Researched Cypress limitations with canvas and PixiJS rendering</li>
      <li>Found and applied a JavaScript-based workaround to expose graph internals</li>
      <li>Paired with senior developer Scott to architect and validate the solution</li>
    </ul>

    <h4 style={headingStyles.h4}>Define</h4>
    <ul>
      <li>Canvas-rendered graphs were previously invisible to automated testing tools</li>
      <li>Graph regressions were being reported daily — yet couldn’t be reliably caught in CI/CD</li>
      <li>The workaround exposed internal PixiJS arrays to Cypress so we could test node counts, values, and layout</li>
    </ul>

    <h4 style={headingStyles.h4}>Develop</h4>
    <ul>
      <li>Wrote custom JavaScript code to surface graph data for Cypress to validate</li>
      <li>Built 20+ Cypress tests that now run in every weekly build</li>
      <li>Tests validate position, point count, color mapping, and layout integrity</li>
      <li>Created reusable test patterns for future QA engineers to expand coverage</li>
    </ul>

    <h4 style={headingStyles.h4}>Deliver</h4>
    <ul>
      <li>First-ever graph automation tests now running in CODAP’s CI pipeline</li>
      <li>Improved regression detection and increased developer confidence</li>
      <li>Helped reduce manual QA load and accelerate release cycles</li>
      <li>Proof-of-concept is now being scaled across more test cases</li>
      <li>Lesson learned: trust the process — even when it seems impossible at first</li>
    </ul>
  </div>
);

export default CODAPAutomationModalContent;