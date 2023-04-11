import React from "react";
import "./Card4.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Card({ image, title, text }) {
  return (
    <Container className="card-container4">
      <Row>
        <Col>
          <img
            src={image}
            width={30}
            height={30}
            className="image-container4"
            alt=""
          />
        </Col>
        <Col>
          <div className="card-content4">
            <div className="card-title4">{title}</div>
            <div className="card-body4">{text}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Card;
