import React from "react";
import "./Section4.css";
import Card from "./Card4";
import pro1 from "./01.png";
import pro2 from "./02.png";
import pro3 from "./03.png";
import pro4 from "./04.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Section4() {
  return (
    <>
      <div className="top">
        <p className="para2">WHY US ?</p>
        <h1 className="text3">The values that we offer</h1>
      </div>
      <Container className="container">
        <Row>
          <Col>
            <Card
              image={pro1}
              title="Architecture"
              text="Provide sustainable and artistic design services that satisfy the building functionsand meet relevant regulations"
            />
          </Col>
          <Col>
            <Card
              image={pro2}
              title="Design & Build"
              text="Provide sustainable and artistic design services that satisfy the building functionsand meet relevant regulations"
            />
          </Col>
        </Row>
      </Container>

      <Container className="container">
        <Row>
          <Col>
            <Card
              image={pro3}
              title="Building Construction"
              text="Provide sustainable and artistic design services that satisfy the building functionsand meet relevant regulations"
            />
          </Col>
          <Col>
            <Card
              image={pro4}
              title="Renovation"
              text="Provide sustainable and artistic design services that satisfy the building functionsand meet relevant regulations"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Section4;
