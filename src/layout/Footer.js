import React from "react";
import { Row, Col, Divider } from "antd";
import { NavLink } from "react-router-dom";

// Images
import footerLogo from "../static/images/footer/footer-logo.png";
import youtube from "../static/images/footer/youtube.png";
import linkedin from "../static/images/footer/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <Row gutter={8} className="footer-row">
        <Col xs={24} md={8} lg={6}>
          <div className="brand-container">
            <img
              className="footer-logo"
              src={footerLogo}
              alt="Body Politic Acupuncture"
            />
            <div className="social-container">
              <a
                href="https://www.youtube.com/channel/UC1u4kr-JMJwwr_ayABade9Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-image"
                  src={youtube}
                  alt="Body Politic YouTube"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/mona-eldahry-48527a4b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-image"
                  src={linkedin}
                  alt="Body Politic LinkedIn"
                />
              </a>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} className="footer-col">
          <ul className="footer-list">
            <li>
              <NavLink exact to="/">
                <p className="link">Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about-us">
                <p className="link">About</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/services">
                <p className="link">Services</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/pricing">
                <p className="link">Pricing</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/videos">
                <p className="link">Video Gallery</p>
              </NavLink>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} className="footer-col">
          <ul className="footer-list">
            <li>
              <NavLink exact to="/services">
                <p className="link">Acupuncture</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/services">
                <p className="link">Herbs</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/services">
                <p className="link">Food</p>
              </NavLink>
            </li>
          </ul>
        </Col>
        <Col xs={24} md={12} lg={6} className="footer-col">
          <h3 className="contact-header">Get in touch</h3>
          <ul className="footer-list">
            <li>
              <a className="contact" href="mailto: mona@bodypolitic.info">
                mona@bodypolitic.info
              </a>
            </li>
            <li>
              <a className="contact" href="tel:(347) 709-0030">
                (347) 709-0030
              </a>
            </li>
            <li>
              <a
                className="contact"
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/R5ucU9V8ZgYfkd9H7"
              >
                186 Montague St, Ground Floor through Lobby Brooklyn, NY 11201
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Divider />
      <small className="copyright">
        Designed & Developed by{" "}
        <span>
          <a
            href="https://nomadion.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nomadion
          </a>
        </span>{" "}
        <br />
        <span>
          Conceptualized & Managed by{" "}
          <a
            href="https://www.marketwithmaddy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Market with Maddy
          </a>
        </span>
      </small>
    </div>
  );
};

export default Footer;
