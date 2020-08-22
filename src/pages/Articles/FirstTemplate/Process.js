import React, { useState } from "react";
import { Row, Col, Button, Card } from "antd";

const processes = [
  {
    id: 1,
    title: "Core Factors Assessment",
    description:
      "First we assess your situation to determine the root cause of the pain.",
  },
  {
    id: 2,
    title: "Detailed Treatment Plan",
    description:
      "Next, we come up with a clear and concise treatment plan to address the root cause along with any other symptoms you might be experiencing. Your treatment plan will include one or more of the following therapies:",
    extra: (
      <p>
        acupuncture, postural work, targeted dietary supplements, herbs, and
        relaxation exercises.
      </p>
    ),
  },
  {
    id: 3,
    title: "Acupuncture and BodyWork",
    description: (
      <span>
        We’ll do regular acupuncture sessions targeted towards relieving pain
        and strengthening your body’s natural healing mechanisms.
        <br />
        We’ll also use gentle body work to address patterns of tension
        throughout your posture, reducing tension and pain, and allowing your
        body to carry itself with ease.{" "}
      </span>
    ),
  },
  {
    id: 4,
    title: "Targetted Dietary Support",
    description:
      "We make sure you have a herbal/dietary plan that supports the healing of the cells and tissues that have been depleted or damaged and are causing pain.",
  },
  {
    id: 5,
    title: "Ensure Stable, Lasting Results",
    description:
      "Once we’ve achieved consistent pain relief, we’ll gradually reduce the frequency of the treatments, to ensure that your results last.",
  },
];
export default function Process() {
  return (
    <div className="light-section fade">
      <div className="section-heading">
        <h2 className="section-header">The Steps</h2>
        <h3 className="section-subheader">Our Proven Process</h3>
        <div className="steps-container">
          <Row gutter={12} className="process-row">
            {processes.map((step) => (
              <Col key={step.id} xs={24} md={12} lg={8}>
                <Card className="process-step light-card">
                  <h2 className="card-heading">{step.title}</h2>
                  <p className="card-description">{step.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
