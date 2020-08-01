import React from "react";
import { Row, Col, Button } from "antd";
import ProgressiveImage from "react-progressive-image";
import Fade from "react-reveal/Fade";

import bodyAlighnment from "../../static/images/services/body-alignment.png";
import bodyAlighnmentPlaceholder from "../../static/images/placeholders/body-alignment-placeholder.jpg"
export default function Body() {
  return (
    <div className="body-alignment">
      <Row gutter={16}>
        <Col className="left-col" xs={24} md={12} lg={10}>
          <div className="section-heading">
            <h2 className="section-subheader" name="body-alignment">
              Body Alignment
            </h2>
            <Fade>
              <p className="section-description">
                Just as our internal and emotional issues tend to show up in our
                posture, our musculoskeletal issues can affect our internal
                health!
              </p>
              <p className="section-description">
                Gentle manual and energetic techniques inspired by ortho-bionomy
                and tui na can facilitate your body's process of correcting its
                own balance and alignment.
              </p>
              <p className="section-description">
                The goal in treatment is to help the body to carry itself with
                ease and to be more effective at healing itself.
              </p>
            </Fade>
          </div>
          <div className="buttons-container">
            <a href="https://bodypolitic.janeapp.com/" target="_blank"
            rel="noopener noreferrer"
            >
              <Button className="schedule-button">Book Appointment</Button>
            </a>
          </div>
        </Col>
        <Col className="right-col" xs={24} md={12} lg={14}>
          <div className="image-container">
            <ProgressiveImage
              src={bodyAlighnment}
              placeholder={bodyAlighnmentPlaceholder}
              delay={1500}
            >
              {(src, loading) => (
                <img
                  style={{ filter: loading ? "blur(2px)" : "blur(0px)" }}
                  className="desktop-banner"
                  width="100%"
                  src={src}
                  alt="Body Alignment"
                />
              )}
            </ProgressiveImage>
          </div>
        </Col>
      </Row>
    </div>
  );
}
