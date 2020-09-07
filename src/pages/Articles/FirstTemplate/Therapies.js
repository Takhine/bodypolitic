import React from "react";
import { Row, Col, Card } from "antd";

const therapies = [
  {
    id: 1,
    title: "Gentle Acupuncture",
    description:
      "Acupuncture is one of the most powerful ways to naturally stimulate your body's innate healing process. Then, it gets right to work repairing and restoring all cells and tissues.  Acupuncture harnesses your body's intelligence to help it heal faster and with more lasting effects.",
  },
  {
    id: 2,
    title: "Herbal Medicine",
    description:
      "Herbs, supplements and food can cure AND strengthen the body. When your cells, glands, and tissues are fully nourished with the specific nutrients they need, they naturally function at a very high level, enabling you to overcome pain and related issues including fatigue, poor sleep, difficulty focusing, muscle weakness and neuropathy.",
  },
  {
    id: 3,
    title: "Postural Alignment BodyWork",
    description:
      "If you suffer from pain, it most likely shows in your posture. For some of us, poor posture can even excacerbate pain. Non-forceful manual and energetic techniques can facilitate your body's process of correcting its own balance and alignment. The goal in treatment is to help your body to return to its natural state and to reduce pain and tension.",
  },
  {
    id: 4,
    title: "Relaxation and Stress-Reduction",
    description:
      "When your nervous system is calm, the hormonal system, immune system, digestive, and circulatory systems all calm down, too. This means a more focused mind, more resilient immune system, less inflammation, better circulation, and optimal nutrient absorption.",
  },
];
export default function Therapies() {
  return (
    <div className="light-section white">
      <div className="section-heading">
        <h3 className="section-subheader">
          The Unique Combination Of Natural Therapies We Will Us
        </h3>
      </div>
      <div className="therapies-container">
        <Row gutter={12}>
          {therapies.map((therapy) => (
            <Col key={therapy.id} xs={24} md={12} lg={6}>
              <Card className="therapy-step dark-card">
                <h2 className="card-heading">{therapy.title}</h2>
                <p className="card-description">{therapy.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
