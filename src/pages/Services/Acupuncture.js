import React from "react";
import { Row, Col, Button, Carousel } from "antd";
import ProgressiveImage from "react-progressive-image";
import Fade from "react-reveal/Fade";

import slide1 from "../../static/images/slider/slide-1.png"
import slide2 from "../../static/images/slider/slide-2.jpg"
import slide3 from "../../static/images/slider/slide-3.png"
import slide4 from "../../static/images/slider/slide-4.jpg"
import slide5 from "../../static/images/slider/slide-5.jpg"

import pslide1 from "../../static/images/slider/slide-1-placeholder.png"
import pslide2 from "../../static/images/slider/slide-2-placeholder.jpg"
import pslide3 from "../../static/images/slider/slide-3-placeholder.png"
import pslide4 from "../../static/images/slider/slide-4-placeholder.jpg"
import pslide5 from "../../static/images/slider/slide-5-placeholder.jpg"

const types = [
  {
    id: 1,
    name: "Needles",
    description: "Thread-like needles are inserted into points on the body.",
  },
  {
    id: 2,
    name: "Acupressure",
    description: "Pressure is applied to key points on the body.",
  },
  {
    id: 3,
    name: "Shonishin",
    description:
      "A light stroking motion used on the surface of the skin for kids and infants.",
  },
  {
    id: 4,
    name: "Cupping",
    description: "Suction cups are placed on various points on the body.",
  },
  {
    id: 5,
    name: "Gua Sha",
    description:
      "A smooth scraping motion is used on the surface of the skin to relieve musculoskeletal, allergy and cold symptoms.",
  },
  {
    id: 6,
    name: "Biomagnetic Therapy",
    description:
      "Magnets placed in pairs (positive and negative) on the body are used to regulate the acupuncture meridians and the tissues that they affect. ",
  },
];

const images = [
  {
    id: 1,
    img: slide1,
    placeholder: pslide1,
    alt: "Acupressure",
  },
  {
    id: 2,
    img: slide2,
    placeholder: pslide2,
    alt: "Shonishin",
  },
  {
    id: 3,
    img: slide3,
    placeholder: pslide3,
    alt: "Cupping",
  },
  {
    id: 4,
    img: slide4,
    placeholder: pslide4,
    alt: "Acupuncture",
  },
  {
    id: 5,
    img: slide5,
    placeholder: pslide5,
    alt: "Gua Sha",
  },
];

const carousel = (
  <Carousel className="image-carousel" autoplay effect="fade">
    {images.map((slide) => (
      <div key={slide.id} className="image-container">
        <ProgressiveImage
          src={slide.img}
          placeholder={slide.placeholder}
          delay={1000}
        >
          {(src, loading) => (
            <img
              style={{ filter: loading ? "blur(2px)" : "blur(0px)" }}
              className="slide-image"
              width="100%"
              src={src}
              alt={slide.alt}
            />
          )}
        </ProgressiveImage>
      </div>
    ))}
  </Carousel>
);
export default function Acupuncture() {
  return (
    <div className="acupuncture">
      <Row gutter={8}>
        <Col className="left-col" xs={24} xl={12} name="acupuncture">
          <div className="section-heading">
            <h3 className="section-subheader">Acupuncture</h3>
            <div className="mobile">{carousel}</div>
            <Fade>
              <p className="section-description acupuncture-description">
                Acupuncture effects the circulation, blood, fluids, energy and
                electricity in the body using various techniques.
              </p>
            </Fade>

            <a href="https://bodypolitic.janeapp.com/" target="_blank"
            rel="noopener noreferrer"
            >
              <Button className="schedule-button">Book Appointment</Button>
            </a>
          </div>
          <Row gutter={4}>
            {types.map((type) => (
              <Col key={type.id} className="type-col" xs={24} sm={12}>
                <Fade>
                  <h3 className="section-header">{type.name}</h3>
                  <p className="type-description">{type.description}</p>
                </Fade>
              </Col>
            ))}
          </Row>
        </Col>
        <Col className="right-col" xs={24} xl={12}>
          <div className="desktop">{carousel}</div>
        </Col>
      </Row>
    </div>
  );
}
