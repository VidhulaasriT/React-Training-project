import React from "react";
import "./Section3.css";
//import Card from "./card.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import pro1 from "./proj1.png";
import pro2 from "./proj2.png";
import pro3 from "./proj3.png";
import pro4 from "./proj4.png";

function Section3() {
  return (
    <>
      <div className="top">
        <p className="para3">OUR PROJECTS</p>
        <h1 className="text3">Creations that we made</h1>
      </div>
      <Container className="container3">
        <Row>
          <Col>
            <div
              className="card3"
              style={{
                backgroundImage: `url(${pro1})`,
                backgroundSize: "cover",
                height: "100vh"
              }}
            >
              <div className="card-body3">
                <h5 className="card-title3">The Ram's Illam</h5>

                <p className="card-text3">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#f1f4f8" }}
                  />{" "}
                  Mahilchi Nagar, Thirunelveli
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <div
              className="card3"
              style={{
                backgroundImage: `url(${pro2})`,
                backgroundSize: "cover",
                height: "100vh"
              }}
            >
              <div className="card-body3">
                <h5 className="card-title3">The Neela New Illam</h5>

                <p className="card-text3">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#f1f4f8" }}
                  />{" "}
                  Mahilchi Nagar, Thirunelveli
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div
              className="card3"
              style={{
                backgroundImage: `url(${pro3})`,
                backgroundSize: "cover",
                height: "100vh"
              }}
            >
              <div className="card-body3">
                <h5 className="card-title3">Texture Renovation </h5>

                <p className="card-text3">
                  {" "}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#f1f4f8" }}
                  />{" "}
                  Mahilchi Nagar, Thirunelveli
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div
              className="card3"
              style={{
                backgroundImage: `url(${pro4})`,
                backgroundSize: "cover",
                height: "100vh"
              }}
            >
              <div className="card-body3">
                <h5 className="card-title3">The Ram's Illam</h5>

                <p className="card-text3">
                  {" "}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#f1f4f8" }}
                  />{" "}
                  Arumuganeri
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Section3;
