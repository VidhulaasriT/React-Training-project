import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Navbar() {
  return (
    <div className="nav">
      <Container>
        <Row>
          <Col xs="auto" className="column1">
            <div className="head1">J2K</div>
          </Col>
          <Col xs="auto" className="column2">
            <div className="logo1">DESIGNS &</div>
            <div className="logo2">Construction</div>
          </Col>
          <Col xs="auto" className="column3">
            <div>
              <ul id="navbar">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="index.html">About</a>
                </li>
                <li>
                  <a href="index.html">Gallery</a>
                </li>
                <li>
                  <a href="index.html">Projects</a>
                </li>
                <li>
                  <a href="index.html">Contact</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navbar;
