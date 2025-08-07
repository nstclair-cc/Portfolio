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
    <Container fluid className="home-section recommendations-section">
      <Container>
        <h1 className="project-heading recommendations-heading">Recommendations</h1>
        {isMobile && (
          <div className="recommendations-mobile-tip">
            <span role="img" aria-label="swipe">👉</span> Swipe to view more recommendations
          </div>
        )}
        {isMobile ? (
          <div className="recommendations-mobile-wrapper">
            <div className="recommendations-mobile-center">
              <div
                className="recommendations-mobile-touch"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Only show one recommendation at a time on mobile */}
                {(() => {
                  const rec = recommendations[currentIdx];
                  return (
                    <Row key={rec.name + currentIdx} className="align-items-center mb-5 recommendations-card">
                      <Col xs={12} className="recommendations-photo-col">
                        <img
                          src={rec.photo}
                          alt={rec.name}
                          className="recommendations-photo"
                        />
                        <div className="recommendations-name">{rec.name}</div>
                        <div className="recommendations-jobtitle">{rec.jobTitle}</div>
                        <div className="recommendations-org">{rec.organization}</div>
                        <div className="recommendations-links">
                          {rec.linkedin && (
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
                          )}
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
                        <blockquote className="recommendations-quote-mobile">
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
            <div className="recommendations-dot-row">
              {recommendations.map((_, i) => (
                <span key={i} className={`recommendations-dot${i === currentIdx ? ' active' : ''}`} />
              ))}
            </div>
          </div>
        ) : (
          recommendations.map((rec, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Row key={rec.name + idx} className={`align-items-center mb-5 recommendations-card${isEven ? '' : ' reverse'}`}>
                <Col xs={12} md={4} className="recommendations-photo-col">
                  <img
                    src={rec.photo}
                    alt={rec.name}
                    className="recommendations-photo"
                  />
                  <div className="recommendations-name">{rec.name}</div>
                  <div className="recommendations-jobtitle">{rec.jobTitle}</div>
                  <div className="recommendations-org">{rec.organization}</div>
                  <div className="recommendations-links">
                    {rec.linkedin && (
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
                    )}
                    {rec.website && (
                      <Button
                        variant="dark"
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
                <Col xs={12} md={8} className="recommendations-quote-col">
                  <blockquote className="recommendations-quote">
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
