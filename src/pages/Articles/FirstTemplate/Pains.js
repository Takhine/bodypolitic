import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import leaf from "../../../static/images/articles/list-icon.svg";
import FadeIn from "react-fade-in";

const pains = [

  "Sciatica",
  "Arthritis",
  "Post-Operative Pain",
  "Osteoarthritis",
  "Sports Injuries",
  "Nerve Pain",
  "Herniated or Bulging Disk",
  "Pain from Traumatic accidents",
  "Neuropathy",
];
export default function Pains() {
  return (
    <div className="dark-section pain-section">
      <div className="section-heading">
        <h3 className="section-subheader pain-heading">
          Effective Treatment for all types of back pain, including:
        </h3>
      </div>
      <div className="pain-container">
        <Row gutter={12}>
          {pains.map((pain) => (
            <Col key={pain} xs={24} sm={12} md={8}>
            <FadeIn delay="400">

              <div className="name-container">
              <img className="icon" src={leaf} alt="List Icon" />
                <h3 className="pain-name">{pain}</h3>
              </div>
              </FadeIn>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
