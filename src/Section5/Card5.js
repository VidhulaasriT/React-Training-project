import React from "react";
import "./Card5.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Card({ text, title, subtitle }) {
  return (
    <div className="card-container">
      <div className="card-body">
        {text}
        <hr />
      </div>

      <Container>
        <Row>
          <Col>
            <div className="text-col">
              <div className="card-title">{title}</div>
              <div className="card-subtitle">{subtitle}</div>
            </div>
          </Col>

          <Col className="star-col">
            <FontAwesomeIcon
              icon={faStar}
              size="xs"
              style={{ color: "#d3e203" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              size="xs"
              style={{ color: "#d3e203" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              size="xs"
              style={{ color: "#d3e203" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              size="xs"
              style={{ color: "#d3e203" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              size="xs"
              style={{ color: "#d3e203" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Card;
