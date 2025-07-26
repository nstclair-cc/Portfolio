
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import womanComputer from "../../Assets/home-main.svg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NATALYA ST. CLAIR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col
              md={5}
              className="home-image-col"
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <img
                src={womanComputer}
                alt="woman at computer"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  width: "100%",
                  objectFit: "contain",
                  transform: "scale(0.6)",
                  transition: "transform 0.2s"
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

