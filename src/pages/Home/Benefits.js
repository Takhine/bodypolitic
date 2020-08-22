import React from "react";
import { Row, Col, Card, Button } from "antd";
import ProgressiveImage from "react-progressive-image";
import Fade from "react-reveal/Fade";
import orange from "../../static/images/icons/orange-ellipse.svg";
import insurance from "../../static/images/home/benefits/insurance.jpg";
import insurancePlaceholder from "../../static/images/placeholders/insurance-placeholder.jpg";


export default function Benefits() {
  return (
    <div className="benefits">
      <div className="section-heading benefits-heading">
        <h2 className="section-header" name="insurance">
          Insurance
        </h2>
        <h3 className="section-subheader ">
          Does my insurance cover acupuncture?
        </h3>
      </div>
      <Row gutter={16} className="benefits-row">
        <Col xs={24} md={12} className="left-col">
          <Card className="dark-card benefit-card">
            {/*<h4 className="card-heading benefit-card-heading">How it works</h4>
            <p className="card-description">
              Your body already knows how to heal. We work side by side with you
              to figure out what your body needs in order to be able to be its
              best, even in the face of illness.
  </p>*/}
            <h4 className="chinese-heading">Our Insurance Options</h4>
            <ul className="chinese-list">
              <Fade>
                <li className="card-description">
                  <img src={orange} alt="list-icon" />{" "}
                  <span>
                    We are in network with United Healthcare, United Empire,
                    Oscar, and other plans.
                  </span>
                </li>
                <li className="card-description">
                  <img src={orange} alt="list-icon" />{" "}
                  <span>
                    We accept out of network Aetna, Cigna, Blue Cross Blue
                    Shield and other plans.
                  </span>
                </li>
                <li className="card-description">
                  <img src={orange} alt="list-icon" />{" "}
                  <span>
                    We are also a member of the Choose Healthy Discount Network.
                  </span>
                </li>
              </Fade>
            </ul>
            <a href="https://bodypolitic.janeapp.com/" target="_blank"
            rel="noopener noreferrer"
            >
              <Button className="learn-more">Contact us</Button>
            </a>
          </Card>
        </Col>
        <Col xs={24} md={12} className="left-col">
          <div className="image-container">
            <ProgressiveImage
              src={insurance}
              placeholder={insurancePlaceholder}
              delay={1500}
            >
              {(src, loading) => (
                <img
                  style={{ filter: loading ? "blur(2px)" : "blur(0px)" }}
                  className="desktop-banner"
                  width="100%"
                  src={src}
                  alt="Insurance Options with Body Politic"
                />
              )}
            </ProgressiveImage>
          </div>
          {/*<Card className="light-card benefit-card">
            <h4 className="card-heading benefit-card-heading">
              What's the difference?
            </h4>
            <p className="card-description">
              In mainstream medicine, your doctor might give you a medication to
              treat your problem; let’s say it’s headaches. You take the
              medication and, ideally, the pain goes away. You stop taking the
              medicine and the pain comes back. So, in effect, the medication is
              stopping the pain, but your body is still producing headaches!
            </p>
            <p className="chinese-quote">
              "Chinese medicine figures out WHY your body is producing
              headaches"
            </p>
            <Button className="learn-more">Learn More</Button>
</Card>*/}
        </Col>
      </Row>
    </div>
  );
}
