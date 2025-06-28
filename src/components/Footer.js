import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center pt-4">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/tejas-pangaonkar" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://x.com/tejas_2706" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/tejas_._2706_._/#" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/tejas-2706" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
