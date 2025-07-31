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

function FadeType() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setFade(false), 4800); // fade out after 4.8s
    const next = setTimeout(() => {
      setIndex((i) => (i + 1) % roles.length);
      setFade(true);
    }, 5500); // next role after 5.5s
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(next);
    };
  }, [index]);

  return (
    <span
      style={{
        display: "inline-block",
        opacity: fade ? 1 : 0,
        transition: "opacity 1.2s cubic-bezier(.4,1.6,.6,1)",
        minHeight: 48,
        fontSize: '2.2em',
        fontWeight: 600,
        letterSpacing: 0.5,
      }}
    >
      {roles[index]}
    </span>
  );
}

export default FadeType;
