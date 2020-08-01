import React from "react";
import { Row, Col, Button, Tag } from "antd";
import ProgressiveImage from "react-progressive-image";
import Fade from "react-reveal/Fade";

// Images
import mona from "../../static/images/about/mona.png";
import monaPlaceholder from "../../static/images/placeholders/mona-placeholder.png";

import julian from "../../static/images/about/julian.png";
import julianPlaceholder from "../../static/images/placeholders/julian-placeholder.png";

export default function Personnel() {
  return (
    <div className="personnel">
      <div className="mona">
        <div className="dark-background-right" />

        <Row gutter={16}>
          <Col className="left-col" xs={24} lg={12} xl={10}>
            <div className="section-heading">
              <h2 className="personnel-name section-subheader">Mona Eldahry</h2>
              <div className="image-container mobile">
                <ProgressiveImage
                  src={mona}
                  placeholder={monaPlaceholder}
                  delay={1500}
                >
                  {(src, loading) => (
                    <img
                      className="mobile"
                      style={{ filter: loading ? "blur(1px)" : "blur(0px)" }}
                      width="100%"
                      src={src}
                      alt="Mona Eldahry"
                    />
                  )}
                </ProgressiveImage>
              </div>
              <Fade>
                <p className="personnel-description section-description">
                  Mona studied acupuncture, herbal medicine and manual
                  techniques at Pacific College of Oriental Medicine, where she
                  completed a Doctorate in Acupuncture and Chinese Medicine
                  (DACM).
                </p>
                <p className="personnel-description section-description">
                  She received training in acupuncture and manual techniques for
                  labor and delivery at her alma mater and at NYU Lutheran
                  Medical Center, where she treated laboring women and
                  individuals recovering from stroke.
                </p>
                <p className="personnel-description section-description">
                  She studies ortho-bionomy, a gentle postural realignment
                  technique, with the Society of Ortho-bionomy.
                </p>
                <p className="personnel-description section-description">
                  In addition to her clinical training in perinatal health, Mona
                  has also received clinical training in pediatric care, weight
                  management and HIV/AIDS.{" "}
                </p>
                <p className="personnel-description section-description">
                  Mona entered healthcare after a long career as a community
                  organizer and popular educator. She believes that quality,
                  affordable healthcare can empower communities.
                </p>
              </Fade>

              <a
                href="https://bodypolitic.janeapp.com/#/staff_member/1"
                rel="noopener noreferrer"
                target="blank"
              >
                <div className="languanges-container">
                  <h3 className="personnel-languages section-subheader">
                    Languages:
                  </h3>
                  <div className="tags-container">
                    <Tag title="Spanish" color="#DEB722">
                      Spanish
                    </Tag>
                    <Tag title="Arabic" color="#DEB722">
                      Arabic
                    </Tag>

                    <Tag title="English" color="#DEB722">
                      English
                    </Tag>
                  </div>
                </div>
                <Button className="personnel-button">Book with Mona</Button>
              </a>
            </div>
          </Col>
          <Col className="right-col" xs={24} lg={12} xl={14}>
            <div className="image-container desktop">
              <ProgressiveImage
                src={mona}
                placeholder={monaPlaceholder}
                delay={1500}
              >
                {(src, loading) => (
                  <img
                    className="desktop"
                    style={{ filter: loading ? "blur(1px)" : "blur(0px)" }}
                    width="100%"
                    src={src}
                    alt="Mona Eldahry"
                  />
                )}
              </ProgressiveImage>
            </div>
          </Col>
        </Row>
      </div>
      <div className="julian">
        <div className="dark-background-left" />

        <Row gutter={16}>
          <Col className="left-col" xs={24} lg={12} xl={14}>
            <div className="image-container julian-image desktop">
              <ProgressiveImage
                src={julian}
                placeholder={julianPlaceholder}
                delay={1500}
              >
                {(src, loading) => (
                  <img
                    className="desktop"
                    style={{ filter: loading ? "blur(1px)" : "blur(0px)" }}
                    width="100%"
                    src={src}
                    alt="Julian Cho"
                  />
                )}
              </ProgressiveImage>
            </div>
          </Col>
          <Col className="right-col" xs={24} lg={12} xl={10}>
            <div className="section-heading">
              <h2 className="personnel-name section-subheader">Julian Cho</h2>
              <div className="image-container mobile">
                <ProgressiveImage
                  src={julian}
                  placeholder={julianPlaceholder}
                  delay={1500}
                >
                  {(src, loading) => (
                    <img
                      className="mobile"
                      style={{ filter: loading ? "blur(1px)" : "blur(0px)" }}
                      width="100%"
                      src={src}
                      alt="Julian Cho"
                    />
                  )}
                </ProgressiveImage>
              </div>
              <Fade>
                <p className="personnel-description section-description">
                  Julian is committed to serving the Queer and Trans* community,
                  working with people with chronic illness and pain as well and
                  promoting emotional wellness. By engaging with the patient as
                  a whole person, Julian helps patients to allow themselves to
                  begin the process of healing.
                </p>
                <p className="personnel-description section-description">
                  He is passionate about learning as a way to provide healthcare
                  from a deep well of knowledge and empathy, and sees patient
                  education, self-empowerment, and participation as key
                  components to healing.
                </p>
                <p className="personnel-description section-description">
                  With an intuitive and flexibly creative approach, he enjoys
                  working with the secondary vessels, as well as with classical
                  treatments. Julian holds a Master's degree in Acupuncture from
                  Pacific College.{" "}
                </p>
              </Fade>

              <a
                href="https://bodypolitic.janeapp.com/#/staff_member/3"
                rel="noopener noreferrer"
                target="blank"
              >
                <div className="languanges-container">
                  <h3 className="personnel-languages section-subheader">
                    Languages:
                  </h3>
                  <div className="tags-container">
                    <Tag title="Korean" color="#DEB722">
                      Korean
                    </Tag>
                    <Tag title="English" color="#DEB722">
                      English
                    </Tag>
                  </div>
                </div>
                <Button className="personnel-button">Book with Julian</Button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
