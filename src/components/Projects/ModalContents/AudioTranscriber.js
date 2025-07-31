import React from "react";
import headingStyles from "./ModalHeadingStyles";

const AudioTranscriberModalContent = () => (
  <div style={{ textAlign: 'left', fontFamily: 'Raleway, sans-serif' }}>
    <h3 style={headingStyles.h3}>Audio Transcriber</h3>
    <hr />
    <div style={{ fontWeight: 'bold', color: '#000' }}>QA Engineering & Speech-to-Text Research</div>
    <div>8 hours to build prototype</div>
    <p><em>Developed a secure, automated transcription tool for large-scale qualitative research — now open source</em></p>
    <hr />
    <div><strong style={{ fontWeight: 800 }}>Project Role:</strong> QA Engineer, UX Researcher, Project Lead</div>
    <div><strong style={{ fontWeight: 800 }}>Platforms:</strong> Python, GitHub, FasterWhisper, Google Speech-to-Text API</div>
    <div><strong style={{ fontWeight: 800 }}>Deliverables:</strong> Local transcription tool prototype, secure data workflow, open-source GitHub repo</div>
    <div><strong style={{ fontWeight: 800 }}>Timeline:</strong> 2 weeks</div>
    <hr />

    <h4 style={headingStyles.h4}>Project Overview</h4>
    <p>
      As part of a research initiative analyzing hundreds of hours of classroom video data, I led the development of an internal audio transcription system. Working with a tight budget, strict privacy requirements, and a massive dataset, we needed a fast and secure way to turn audio into searchable text — without sending sensitive student data to the cloud.
    </p>
    <p>
      I initiated and led the project, working closely with a senior developer (<a href="https://goldowsky.com/boris/" target="_blank">Boris</a>) to build the first working prototype using Google’s Speech-to-Text API, then iterating toward a local pipeline using FasterWhisper. The tool ultimately automated a previously manual transcription workflow and unlocked massive time savings for our qualitative research team.
    </p>

    <h4 style={headingStyles.h4}>Problem Statement</h4>
    <ul>
      <li>How can we securely and efficiently transcribe hundreds of hours of classroom video while staying compliant with strict student data privacy policies?</li>
      <li>How can we scale transcription workflows to support timely, high-quality qualitative research that informs student learning and improves outcomes?</li>
    </ul>

    <h4 style={headingStyles.h4}>The Solution</h4>
    <p>
      I began by prototyping a k-means clustering system to segment the audio, but the scale of the data quickly outpaced that approach. With Boris's help, we pivoted to Google’s transcription API, and later I added a local FasterWhisper implementation to meet data security needs. My contributions included both the initial idea and the working codebase, which has since been open-sourced for use by other researchers.
    </p>
    <p>
      The PI’s response after our first demo: <em>“I’ve waited 20 years for this.”</em>
    </p>

    <h4 style={headingStyles.h4}>Aligning Goals</h4>
    <p>
      The work was driven by a practical research need: I was spending countless hours manually transcribing video data for our team. Building this tool allowed us to reinvest that time into deeper analysis, while also opening the door to broader platform development down the line.
    </p>

    <h4 style={headingStyles.h4}>Discover</h4>
    <ul>
      <li>Audited our existing qualitative workflow to identify bottlenecks in video-to-text processing</li>
      <li>Tested a k-means approach for clustering speech segments, which didn’t scale for our dataset</li>
      <li>Prototyped with Google’s API before switching to FasterWhisper to enable local, offline transcription</li>
    </ul>

    <h4 style={headingStyles.h4}>Define</h4>
    <ul>
      <li>Data security was a non-negotiable: student data could not be sent to the cloud</li>
      <li>Our tool had to run on local machines or in a tightly scoped internal environment</li>
      <li>Speed and batchability were key — we were dealing with hundreds of hours of footage</li>
    </ul>

    <h4 style={headingStyles.h4}>Develop</h4>
    <ul>
      <li>Wrote and iterated on Python scripts for audio segmentation and transcription</li>
      <li>Collaborated with Boris (senior dev) on workflow structure and optimization</li>
      <li>Tested transcription output and validated accuracy against research-grade standards</li>
    </ul>

    <h4 style={headingStyles.h4}>Deliver</h4>
    <ul>
      <li>Developed a functioning audio transcriber used internally for large-scale research</li>
      <li>Open-sourced the project via our organization’s GitHub for future research use</li>
      <li>Recognized internally as a prototype for a larger, institution-wide platform</li>
      <li>Saved our team hundreds of hours of manual labor and elevated research capacity</li>
    </ul>
  </div>
);

export default AudioTranscriberModalContent;