import React from "react";
import { Row, Col, Button } from "antd";
import orange from "../../static/images/icons/orange-ellipse.svg";
import desktopScreen from "../../static/images/home/process/desktop-clinic.png";
import mobileClinic from "../../static/images/home/process/mobile-clinic.png";

const header = (
  <div className="section-heading process-heading">
    <h2 className="section-header">Process</h2>
    <h3 className="section-subheader process-subheader">
      Lets map out <br />
      the experience
      <br className="desktop" /> for you
    </h3>
  </div>
);
const button = (
  <a
    href="https://bodypolitic.janeapp.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="process-button">Book Appointment</Button>
  </a>
);
const button2 = (
  <a
    href="https://bodypolitic.janeapp.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="process-button2">Free Consultation</Button>
  </a>
);

const article1 = (
  <div className="process-container">
    <h4 className="process-header">Getting to know you</h4>
    <p className="process-description">
      At your Initial Treatment, we’ll listen to your concerns and conduct a
      full intake. This may include:
    </p>
    <ul className="process-list">
      <li className="list-description">
        <img src={orange} alt="list-icon" /> <span>Tongue diagnosis</span>
      </li>
      <li className="list-description">
        <img src={orange} alt="list-icon" /> <span>Pulse diagnosis</span>
      </li>
      <li className="list-description">
        <img src={orange} alt="list-icon" /> <span>Facial diagnosis</span>
      </li>
      <li className="list-description">
        <img src={orange} alt="list-icon" /> <span>Palpation</span>
      </li>
      <li className="list-description">
        <img src={orange} alt="list-icon" />{" "}
        <span>Evaluating your gait and posture</span>
      </li>
      <li className="list-description">
        <img src={orange} alt="list-icon" />{" "}
        <span>Asking lots of questions</span>
      </li>
    </ul>
  </div>
);

const article2 = (
  <div className="process-container">
    <h4 className="process-header">Health Insurance</h4>
    <p className="process-description">Our Insurance Options</p>
    <ul className="process-list">
      <li className="list-description">
        <img src={orange} alt="list-icon" />{" "}
        <span>
          We are in network with United Healthcare, United Empire, Oscar, and
          other plans.
        </span>
      </li>
      <li className="list-description">
        <img src={orange} alt="list-icon" />{" "}
        <span>
          We accept out of network Aetna, Cigna, Blue Cross Blue Shield and
          other plans.
        </span>
      </li>
      <li className="list-description">
        <img src={orange} alt="list-icon" />{" "}
        <span>
          We are also a member of the Choose Healthy Discount Network.
        </span>
      </li>
    </ul>
  </div>
);
const article3 = (
  <div className="process-container">
    <h4 className="process-header">Planning the journey</h4>
    <p className="process-description">
      We’ll then map out your goals, and create a plan with a timeline that
      works for you.
    </p>
  </div>
);
export default function Process() {
  return (
    <div className="process">
      <Row className="process-row">
        <Col xs={24} xl={14} className="left-col">
          <div className="light-background" />
          <div className="desktop left-content">
            <div className="desktop">
              {article1}
              {article3}
              {article2}
            </div>
            <div className="image-container desktop">
              <img
                className="clinic-image desktop"
                src={desktopScreen}
                alt="Body Politic Old Clinic"
              />
            </div>
          </div>
          <div className="mobile mobile-header-container">
            {header}

            <Row gutter={8}>
              <Col className="offer-col" xs={24} md={12}>
                <p className="offer-message">
                  If you’re a returning client or you’ve just had your Free
                  Consultation:
                </p>
                {button}
              </Col>
              <Col className="offer-col" xs={24} md={12}>
                <p className="offer-message">
                  If you would like a private or semi private treatment or if
                  your insurance will cover the treatment (First Consultation):
                </p>
                {button2}
              </Col>
            </Row>
          </div>
          <div className="mobile mobile-container">
            <div className="mobile-left">
              {article1}
              <div className="offer mobile-offer">
                <p className="offer-message">
                  Your first
                  <br /> consultation
                  <br /> with us is FREE
                </p>
                <div className="image-container">
                  <img
                    className="clinic-image mobile-image"
                    src={mobileClinic}
                    alt="Body Politic Old Clinic"
                  />
                </div>
              </div>
              {article2}
              {article3}
            </div>
            <div className="mobile-right">
              <div className="image-container">
                <img
                  className="clinic-image"
                  src={desktopScreen}
                  alt="Body Politic Old Clinic"
                />
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} xl={10} className="right-col">
          <div className="desktop">{header}</div>
          <div className="desktop offer">
            <p className="offer-message">
              If you’re a returning client or you’ve just had your Free
              Consultation, You can schedule an appointment here.
            </p>
            {button}
            <p className="offer-message">
              In case you'd like a <b>private</b> or <b>semi-private</b>{" "}
              treatment or if your insurance will cover the treatment, Please
              first schedule a Free Consultation. There, you can get a feeling
              for the practice and we can learn about your goals.
            </p>
            {button2}
          </div>
        </Col>
      </Row>
    </div>
  );
}
