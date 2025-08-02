import React, { useState, useEffect } from "react";

const roles = [
  "Viral TED-Ed Author",
  "Award-Winning UXR Author",
  "Mathematics Enthusiast",
  "UX Research Specialist",
  "Product Manager",
  "Education Technologist",
  "Data Viz Specialist",
  "STEM Ed Tech",
  "Qualitative Researcher",
  "Research Collaborator",
  "Project Team Lead",
  "Curriculum Designer",
  "Education Data Analyst",
  "Open Source Advocate",
];

function FadeType() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setFade(false), 1800); // fade out after 1.8s
    const next = setTimeout(() => {
      const nextIdx = (index + 1) % roles.length;
      setIndex(nextIdx);
      setFade(true);
    }, 3200); // next role after 3.2s
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(next);
    };
  }, [index]);

  return (
    <span
      className="role"
      style={{
        display: "inline-block",
        opacity: fade ? 1 : 0,
        transition: "opacity 0.6s cubic-bezier(.4,1.6,.6,1)",
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
