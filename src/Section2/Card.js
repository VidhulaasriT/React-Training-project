import React from "react";
import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Card({ image, title, text }) {
  return (
    <Container className="card-container2">
      <Row>
        <Col>
          <img
            src={image}
            width={40}
            height={40}
            className="image-container2"
            alt=""
          />
        </Col>
        <Col>
          <div className="card-content2">
            <div className="card-title2">{title}</div>
            <div className="card-body2">{text}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Card;
