import React from "react";
import { Row, Col, Card } from "antd";

const working = [
  {
    id: 1,
    title: "We address the ROOT CAUSE.",
    description: "Our process includes finding and addressing the actual root CAUSE of your problem. This is why so many have found relief with our therapies, even though other therapies didn’t work. Even those with a long family history of their condition have experienced significant relief.",
  },
  {
    id: 2,
    title: "We use an all natural approach your doctor doesn’t know about.",
    description: "Your doctor may have told you that you have to take painkillers and/or get surgery. Because our process leverages your body’s own healing, drugs and surgery can often be avoided.",
  },
  {
    id: 3,
    title: "We awaken your body's natural healing system",
    description: "Despite what you may have been led to believe, your body is not “broken” and it IS possible to heal. That’s because your body never forgets how to heal itself. It just needs the right support. Your body makes its own anti-infammatory substances and painkillers, and our therapies help it to do just that.",
  },
  {
    id: 4,
    title: "We focus on quick relief from pain and other symptoms",
    description: "Many of our patients see improvements NOT in weeks or months, but within 7-10 days, and even at times after just one visit. Stopping the pain does not have to be difficult. Simple, targeted lifestyle and diet changes, along with our targeted natural therapies, are a very clear and concise way to attack the problem head on.",
  },
]

export default function Working() {
  return (
    <div className="dark-section">
      <div className="section-heading">
        <h3 className="section-subheader" name="working">Here's how it works</h3>
      </div>
      <div className="working-container">
      <Row gutter={12}>
        {working.map((work) => (
          <Col key={work.id} xs={24} md={12}>
            <Card className="light-card working-step">
              <h2 className="card-heading">{work.title}</h2>
              <p className="card-description">{work.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </div>
  );
}
