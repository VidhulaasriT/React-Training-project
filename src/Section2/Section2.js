import React from "react";
import "./Section2.css";
import Card from "./Card.js";
import arc from "./architecture.png";
import db from "./design-build.png";
import bc from "./building-construction.png";
import reno from "./renovation.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Section2() {
  return (
    <>
      <div className="top">
        <p className="para2">OUR SERVICES</p>
        <h1 className="text2"> Works that we did </h1>
      </div>
      <Container className="container2">
        <Row>
          <Col>
            <Card
              image={arc}
              title="Architecture"
              text="Provide sustainable and artistic design services that satisfy the building functionsand meet relevant regulations"
            />
          </Col>
          <Col>
            <Card
              image={db}
              title="Design & Build"
              text="Provide sustainable and artistic design services that satisfy the building functionsand meet relevant regulations"
            />
          </Col>
        </Row>
      </Container>

      <Container className="container2">
        <Row>
          <Col>
            <Card
              image={bc}
              title="Building Construction"
              text="Provide sustainable and artistic design services that satisfy the building functionsand meet relevant regulations"
            />
          </Col>
          <Col>
            <Card
              image={reno}
              title="Renovation"
              text="Provide sustainable and artistic design services that satisfy the building functionsand meet relevant regulations"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Section2;
