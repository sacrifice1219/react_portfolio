import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MailchimpForm from "./MailChimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {

  const currentYear = () => {
    const date = new Date();
    return date.getFullYear()
  }

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col
            style={{
              textDecoration: "none",
              color: "White",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Lucky
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="www.facebook.com/itzkiddace">
                <img src={navIcon2} alt="FaceBook" />
              </a>
              <a href="www.instagram.com/itzkiddace">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright {currentYear()}. All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
