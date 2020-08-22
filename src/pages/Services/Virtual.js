import React from "react";
import { Row, Col, Button } from "antd";
import ProgressiveImage from "react-progressive-image";
import Fade from "react-reveal/Fade";

import diet from "../../static/images/services/virtual-diet.jpg";
import  placeholderDiet from "../../static/images/placeholders/virtual-diet-placeholder.jpg";
export default function Virtual() {
  return (
    <div className="herbal-diet">
      <Row gutter={16}>
        <Col className="right-col" xs={24} md={12} xl={10}>
          <div className="section-heading">
            <h2
              className="section-subheader herbal-subheader"
              name="virtual-diet"
            >
              Virtual Herbal-Dietary Consultation
            </h2>
            <Fade>
              <p className="section-description  herbal-description">
                This is an Herbal/Dietary Consultation, but from the comfort of
                your home. This is great if you want to get work done at home or
                if you're experiencing cold/flu/Covid-19 symptoms. Herbal and
                dietary therapy can help keep your body on track.
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
        <Col className="left-col" xs={24} md={12} xl={14}>
          <div className="image-container">
            <ProgressiveImage
              src={diet}
              placeholder={placeholderDiet}
              delay={1500}
            >
              {(src, loading) => (
                <img
                  style={{ filter: loading ? "blur(2px)" : "blur(0px)" }}
                  width="100%"
                  src={src}
                  alt="Virtual Diet"
                />
              )}
            </ProgressiveImage>
          </div>
        </Col>
      </Row>
    </div>
  );
}
