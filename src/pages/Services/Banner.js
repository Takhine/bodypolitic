import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-scroll";
import FadeIn from "react-fade-in";
import ProgressiveImage from "react-progressive-image";
import servicesBanner from "../../static/images/services/services-banner.png";
import servicesBannerPlaceholder from "../../static/images/placeholders/services-banner-placeholder.png";
export default function Banner() {
  
  return (
    <div className="services-banner">
      <div className="light-background" />
      <Row className="services-row">
        <Col className="left-col" xs={24} md={12} lg={10}>
          <FadeIn delay="600">
            <h2 className="banner-heading">Services</h2>
          </FadeIn>

          <h1 className="banner-subheading">
            Explore our services to learn how we
            <br /> can help you improve your health
          </h1>
          <div className="buttons-container">
            <Link
              activeClass="active"
              to="acupuncture"
              spy={true}
              smooth={true}
              duration={500}
              offset={-150}
            >
              <Button className="service-button main-button">
                Acupuncture
              </Button>
            </Link>
            <Link
              activeClass="active"
              to="body-alignment"
              spy={true}
              smooth={true}
              duration={500}
              offset={-150}
            >
              <Button className="service-button">Body Alignment</Button>
            </Link>
            <Link
              activeClass="active"
              to="herbal-diet"
              spy={true}
              smooth={true}
              duration={500}
              offset={-150}
            >
              <Button className="service-button">
                Herbal-Dietary Consultation
              </Button>
            </Link>

            <Link
              activeClass="active"
              to="virtual-diet"
              spy={true}
              smooth={true}
              duration={500}
              offset={-150}
            >
              <Button className="service-button main-button">
                Virtual Herbal-Dietary Consultation
              </Button>
            </Link>
          </div>
        </Col>
        <Col className="right-col" xs={24} md={12} lg={14}>
          <div className="image-container">
            <FadeIn delay="800">
              <ProgressiveImage
                src={servicesBanner}
                placeholder={servicesBannerPlaceholder}
                delay={1500}
              >
                {(src, loading) => (
                  <img
                    className="banner-image"
                    style={{ filter: loading ? "blur(1px)" : "blur(0px)" }}
                    width="100%"
                    src={src}
                    alt="Acupuncture, Herbal Diet & Body Alignment with Body Politic"
                  />
                )}
              </ProgressiveImage>
            </FadeIn>
          </div>
        </Col>
      </Row>
    </div>
  );
}
