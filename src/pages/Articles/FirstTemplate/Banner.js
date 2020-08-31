import React from "react";
import { Row, Col, Button, Card } from "antd";
import { Link } from "react-scroll";
import FadeIn from "react-fade-in";
import image from "../../../static/images/articles/pain-relief.jpg";
import imageMobile from "../../../static/images/articles/pain-relief-mobile.jpg";

export default function Banner() {
  return (
    <div className="article-banner">
      <div className="image-container">
        <img className="desktop" src={image} alt="Pain Relief" />
        <img className="mobile" src={imageMobile} alt="Pain Relief" />
      </div>
      <Row className="banner-row">
        <Col className="left-col" xs={24} md={12} lg={10}>
          <Card bordered={false} className="banner-card">
            <FadeIn delay="600">
              <h2 className="banner-heading">Pain Treatment</h2>
            </FadeIn>
            <FadeIn delay="600">
              <h2 className="banner-subheading">Walk Without Pain Again</h2>
            </FadeIn>

            <FadeIn delay="600">
              <h3 className="banner-message">
                No Pain Meds, Injections Or Surgery.
              </h3>
            </FadeIn>
            <FadeIn delay="400">
              <h1 className="banner-description">
                Our 100% natural therapies help you lessen or even eliminate
                back pain so you can live a more fulfilling, active life.
              </h1>
            </FadeIn>

            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-150}
            >
              <Button className="banner-button">Learn More</Button>
            </Link>


          </Card>
        </Col>
      </Row>
    </div>
  );
}
