import React, { useState, useEffect } from "react";

const roles = [
  "TED-ED Author",
  "Award-Winning Author",
  "Mathematics Enthusiast",
  "UX Researcher",
  "Product Manager",
  "Education Technologist",
  "Learning Scientist",
  "Data Visualization Specialist",
  "STEM Educator",
  "Qualitative Analyst",
  "Research Associate",
  "Project Manager",
  "Curriculum Developer",
  "Data Analyst",
  "Open Source Contributor",
];

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?";

function scrambleText(target, progress) {
  const arr = [];
  for (let i = 0; i < target.length; i++) {
    if (i < progress) {
      arr.push(<span key={i}>{target[i]}</span>);
    } else {
      arr.push(
        <span key={i} style={{ color: '#555553ff', opacity: 0.85 }}>
          {chars[Math.floor(Math.random() * chars.length)]}
        </span>
      );
    }
  }
  return arr;
}

function ScrambleType() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(roles[0]);

  useEffect(() => {
    let frame = 0;
    const reveal = () => {
      frame++;
      if (frame <= roles[index].length) {
        setDisplay(scrambleText(roles[index], frame));
        setTimeout(reveal, 70); // slower animation
      } else {
        setDisplay(roles[index]);
        setTimeout(() => {
          setIndex((i) => (i + 1) % roles.length);
        }, 3500); // longer pause on each role
      }
    };
    reveal();
    // eslint-disable-next-line
  }, [index]);

  return (
    <span
      style={{
        display: "inline-block",
        fontSize: '2.2em',
        fontWeight: 600,
        letterSpacing: 0.5,
        minHeight: 48,
        transition: "color 0.3s",
      }}
    >
      {display}
    </span>
  );
}

export default ScrambleType;
