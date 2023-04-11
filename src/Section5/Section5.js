import React from "react";
import "./Section5.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./Card5";

function Section5() {
  return (
    <>
      <div className="top">
        <p className="para2">TESTIMONIALS</p>
        <h1 className="text3">What People Saw About Us</h1>
      </div>
      <Container className="Container5">
        <Row>
          <Col>
            <Card
              text="I would definitely recommend J2K Designs and Constructions to build your dream buildings as their works and designs are out of the world . Their customer care and the way they approach the customers are really great."
              title="Mr.Ram Kumar B"
              subtitle="New House Construction"
            />
          </Col>
          <Col>
            <Card
              text="I would definitely recommend J2K Designs and Constructions to build your dream buildings as their works and designs are out of the world . Their customer care and the way they approach the customers are really great."
              title="Mr.Ram Kumar B"
              subtitle="New House Construction"
            />
          </Col>
          <Col>
            <Card
              text="I would definitely recommend J2K Designs and Constructions to build your dream buildings as their works and designs are out of the world . Their customer care and the way they approach the customers are really great."
              title="Mrs.Sheela R"
              subtitle="New House Construction"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Section5;
