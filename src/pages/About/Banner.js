import React from "react";
import { Row, Col } from "antd";
import FadeIn from "react-fade-in";

// Images
import line from "../../static/images/icons/line.png";
export default function Banner() {
  return (
    <div className="about-banner">
      <div className="dark-background" />
      <Row gutter={16}>
        <Col className="left-col" xs={24} lg={14}>
          <h2 className="banner-heading">About Us</h2>
          <FadeIn delay="600">

          <h1 className="banner-subheading">
            We work side by side with you to figure out what your body needs in
            order to be able to be its best, even in the face of illness.
          </h1>
          </FadeIn>
          <div className="usp-container">
          <p className="usp">Acupuncture</p>
          <img className="lines" src={line} alt="Line" />
          <p className="usp">Herbs</p>
          <img className="lines" src={line} alt="Line" />
          <p className="usp">Food</p>
        </div>
        </Col>
        <Col xs={24} lg={10}>
          <div className="section-heading">
          <h3 className="section-subheader">Our Practice</h3>
          <p className="section-description">
            This type of treatment can be used regardless of what type of
            medical care you are receiving. For example, if you’re taking
            medication to reduce symptoms, you can use holistic medicine to get
            to the root of the problem. Your doctor might then reduce your dose
            or allow you to stop taking the medication completely.
          </p>
          <p className="section-description">
            Both biomedicine and holistic care play integral parts in the
            healthcare landscape. As informed consumers, we can benefit from
            both.
          </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
