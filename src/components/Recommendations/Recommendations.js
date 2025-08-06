import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import recommendations from "./recommendationsData";

function Recommendations() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = () => setCurrentIdx((prev) => (prev === 0 ? recommendations.length - 1 : prev - 1));
  const handleNext = () => setCurrentIdx((prev) => (prev === recommendations.length - 1 ? 0 : prev + 1));

  // Touch/swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) handlePrev();
    else if (diff < -50) handleNext();
    touchStartX.current = null;
  };

  return (
    <Container fluid className="home-section" style={{ minHeight: "100vh", background: "#f5f5f6", paddingTop: 40, paddingBottom: 40 }}>
      <Container>
        <h1 className="project-heading" style={{ marginBottom: 32 }}>Recommendations</h1>
        {isMobile ? (
          <div style={{ position: "relative", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div
                style={{ width: "100%" }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Only show one recommendation at a time on mobile */}
                {(() => {
                  const rec = recommendations[currentIdx];
                  return (
                    <Row key={rec.name + currentIdx} className="align-items-center mb-5" style={{ background: "#f5f5f6", borderRadius: 16, boxShadow: "0 2px 16px #eee", padding: 0, marginBottom: 32 }}>
                      <Col xs={12} style={{ textAlign: "center", padding: 32 }}>
                        <img
                          src={rec.photo}
                          alt={rec.name}
                          style={{ width: "100%", maxWidth: 220, borderRadius: "50%", objectFit: "cover", boxShadow: "0 2px 12px #ccc" }}
                        />
                        <div style={{ marginTop: 16, fontWeight: 600, fontSize: 18 }}>{rec.name}</div>
                        <div style={{ color: "#555", fontSize: 15 }}>{rec.jobTitle}</div>
                        <div style={{ color: "#888", fontSize: 15 }}>{rec.organization}</div>
                        <div style={{ marginTop: 16 }}>
                          <Button
                            variant="primary"
                            href={rec.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginRight: rec.website ? 12 : 0 }}
                          >
                            <FaLinkedin style={{ marginRight: 6, verticalAlign: "middle" }} />
                            LinkedIn
                          </Button>
                          {rec.website && (
                            <Button
                              variant="secondary"
                              href={rec.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGlobe style={{ marginRight: 6, verticalAlign: "middle" }} />
                              Website
                            </Button>
                          )}
                        </div>
                        <blockquote style={{ fontSize: isMobile ? 15 : 20, fontStyle: "italic", color: "#222", margin: "32px 0 0 0" }}>
                          “{rec.quote.split('\n').map((line, idx, arr) => (
                            <span key={idx}>
                              {line.trim()}
                              {idx < arr.length - 1 && <><br /><br /></>}
                            </span>
                          ))}”
                        </blockquote>
                      </Col>
                    </Row>
                  );
                })()}
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: 12 }}>
              {recommendations.map((_, i) => (
                <span key={i} style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: i === currentIdx ? "#111" : "#444",
                  margin: 4
                }} />
              ))}
            </div>
          </div>
        ) : (
          recommendations.map((rec, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Row key={rec.name + idx} className="align-items-center mb-5" style={{ background: "#f5f5f6", borderRadius: 16, boxShadow: "0 2px 16px #eee", padding: 0, marginBottom: 32, flexDirection: isEven ? undefined : 'row-reverse' }}>
                <Col xs={12} md={4} style={{ textAlign: "center", padding: 32 }}>
                  <img
                    src={rec.photo}
                    alt={rec.name}
                    style={{ width: "100%", maxWidth: 220, borderRadius: "50%", objectFit: "cover", boxShadow: "0 2px 12px #ccc" }}
                  />
                  <div style={{ marginTop: 16, fontWeight: 600, fontSize: 18 }}>{rec.name}</div>
                  <div style={{ color: "#555", fontSize: 15 }}>{rec.jobTitle}</div>
                  <div style={{ color: "#888", fontSize: 15 }}>{rec.organization}</div>
                  <div style={{ marginTop: 16 }}>
                    <Button
                      variant="primary"
                      href={rec.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: rec.website ? 12 : 0 }}
                    >
                      <FaLinkedin style={{ marginRight: 6, verticalAlign: "middle" }} />
                      LinkedIn
                    </Button>
                    {rec.website && (
                      <Button
                        variant="secondary"
                        href={rec.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe style={{ marginRight: 6, verticalAlign: "middle" }} />
                        Website
                      </Button>
                    )}
                  </div>
                </Col>
                <Col xs={12} md={8} style={{ padding: 32, textAlign: "left" }}>
                  <blockquote style={{ fontSize: 20, fontStyle: "italic", color: "#222", marginBottom: 0 }}>
                    “{rec.quote.split('\n').map((line, idx, arr) => (
                      <span key={idx}>
                        {line.trim()}
                        {idx < arr.length - 1 && <><br /><br /></>}
                      </span>
                    ))}”
                  </blockquote>
                </Col>
              </Row>
            );
          })
        )}
      </Container>
    </Container>
  );
}

export default Recommendations;
