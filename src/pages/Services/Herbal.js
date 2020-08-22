import React from "react";
import { Row, Col, Button } from "antd";
import ProgressiveImage from "react-progressive-image";
import Fade from "react-reveal/Fade";
import diet from "../../static/images/services/herbal-diet.jpg";
import dietPlaceholder from "../../static/images/placeholders/herbal-diet-placeholder.jpg";

export default function Herbal() {
  return (
    <div className="herbal-diet">
      <Row gutter={16}>
        <Col className="left-col" xs={24} md={12} xl={14} name="herbal-diet">
          <div className="section-heading mobile">
            <h2 className="section-subheader herbal-subheader">
              Herbal-Dietary Consultation
            </h2>
          </div>
          <div className="image-container">
            <ProgressiveImage
              src={diet}
              placeholder={dietPlaceholder}
              delay={1500}
            >
              {(src, loading) => (
                <img
                  style={{ filter: loading ? "blur(2px)" : "blur(0px)" }}
                  className="desktop-banner"
                  width="100%"
                  src={src}
                  alt="Herbal Diet"
                />
              )}
            </ProgressiveImage>
          </div>
        </Col>
        <Col className="right-col" xs={24} md={12} xl={10}>
          <div className="section-heading">
            <h2 className="section-subheader desktop herbal-subheader">
              Herbal-Dietary Consultation
            </h2>
            <Fade>
              <p className="section-description  herbal-description">
                Herbs and diet support our bodies from the inside out. Dietary
                changes are often all that is necessary to make major changes in
                your health. Traditional Chinese herbal formulas and dietary
                supplements may also be used to support your body in the process
                of becoming more and more balanced.
              </p>
            </Fade>
          </div>
          <div className="buttons-container">
            <a href="https://bodypolitic.janeapp.com/" target="_blank"
            rel="noopener noreferrer"
            >
              <Button className="diet-button">Book Appointment</Button>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
