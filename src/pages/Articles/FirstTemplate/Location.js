import React, { useState } from "react";
import { Row, Col, Divider } from "antd";

export default function Location() {
  return (
    <div className="light-section white">
      <div className="section-heading">
        <h2 className="section-header">Location</h2>
        <h3 className="section-subheader">Conveniently Located</h3>
        <p className="section-message">
          Making it easy for you to get the care you need
        </p>
      </div>
      <Row gutter={12}>
        <Col xs={24} md={18}>
          <iframe
            className="google-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12100.396244443682!2d-73.9916863!3d40.6938159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x117cca2b201e8029!2sBody%20Politic%20Acupuncture!5e0!3m2!1sen!2sin!4v1598085134895!5m2!1sen!2sin"
            frameBorder="0"
            style={{ border: 0 }}
            ariaHidden="false"
            tabIndex="0"
          ></iframe>
        </Col>
        <Col className="address-col" xs={24} md={6}>
          <h3>
            <a href="tel:(347) 709-0030">
              <span className="number">(347)709-0030</span>
            </a>
          </h3>
          <Divider style={{borderColor: '#DEB722', margin: '3px 0'}}/>
          <h3>
            <a
              className="contact"
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/R5ucU9V8ZgYfkd9H7"
            >
              186 Montague St, Ground Floor through Lobby Brooklyn, NY 11201
            </a>
          </h3>
        </Col>
      </Row>
    </div>
  );
}
