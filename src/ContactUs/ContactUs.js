import React from "react";
//import { Button } from "react-bootstrap";
import "./ContactUs.css";
//import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
function ContactUs() {
  return (
    <>
      <div className="contact-container">
        <h2 className="h2">
          So, What are you waiting for? Let's build your dream project!
        </h2>
        <p className="para">
          Get interesting housing info straight to your inbox, and build the
          building you want. Contact us
        </p>
        <Button className="button">Contact Us</Button>
      </div>
    </>
  );
}

export default ContactUs;
