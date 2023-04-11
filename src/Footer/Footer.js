import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fb from "./facebook (1).svg";
import lkd from "./linkedin.svg";
import tw from "./instagram.svg";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faLinkedIn } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="big-col">
            <div>
              <h2 className="h2C">J2K DESIGNS AND CONSTRUCTIONS</h2>
              <p className="paraC">
                We strive to provide the best service and we make attachments
                with the nature by providing an unforgettable experience{" "}
              </p>
              <p className="paraC">Follow us on</p>

              <img src={lkd} className="img" alt="" />
              <img src={tw} className="img" alt="" />
              <img src={fb} className="img" alt="" />
            </div>
          </Col>

          <Col md={{ span: 5, offset: 4 }}>
            <Container className="footer-container">
              <Row>
                <Col xs="auto" className="nav-col">
                  <div className="col-2">
                    <h3 className="headC"> Navigation </h3>
                    <p className="paraC">Home</p>
                    <p className="paraC">Service</p>
                    <p className="paraC">Company</p>
                    <p className="paraC">Other works</p>
                    <p className="paraC">Contact</p>
                  </div>
                </Col>

                <Col className="link-col">
                  <div className="col-3">
                    <h3 className="headC"> Link </h3>
                    <p className="paraC">Facebook</p>
                    <p className="paraC">Instagram</p>
                    <p className="paraC">Youtube</p>
                    <p className="paraC">Twitter</p>
                  </div>
                </Col>

                <Col xs="auto" className="contact-col">
                  <div className="col-4">
                    <h3 className="headC"> Get in touch </h3>
                    <p className="paraC">123 456 7789 10</p>
                    <p className="paraC">007 popie, New city, USA</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
