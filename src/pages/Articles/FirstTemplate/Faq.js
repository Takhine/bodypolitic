import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

const faqs = [
  {
    id: 1,
    question: "Does it hurt?",
    answer:
      "The needles are extremely thin, and they cause little or no pain because they are razor sharp.",
  },
  {
    id: 2,
    question: "Will I have to keep coming forever?",
    answer:
      "The vast majority of patients don’t need long-term maintenance. Once their condition is resolved, it stays that way.",
  },
  {
    id: 3,
    question: "Will I have to spend a lot of time coming in for treatments?",
    answer:
      "Most of our patients are able to get great results with once-weekly visits. We can discuss this in more detail at your free consultation.",
  },
  {
    id: 4,
    question: "Is natural medicine REALLY strong enough for my pain?",
    answer:
      "Absolutely. Natural medicine actually helps your body make more of its own medicine, which is more powerful and potent than any man-made medicine.",
  },
  {
    id: 5,
    question:
      "Will I have to do some kind of horrible, super-restrictive detox or elimination diet?",
    answer:
      "Absolutely NOT. Our program is all about setting you up to succeed. We find the 2 or 3 key leverage points in your diet and work on those. No impossible to follow meal plans or detoxes here.",
  },
  {
    id: 6,
    question: "How long does it take to see results?",
    answer:
      "People often feel a positive shift after the very first treatment. Acupuncture is a very powerful way to stimulate endorphin release, which is the most powerful relaxing substance the body makes.",
  },
  {
    id: 7,
    question: "What are my chances of success?",
    answer:
      "Results vary, of course. That being said, the vast majority of our patients report reduction in frequency and severity of their pain and many are able to reduce or eliminate their medication use. However, your situation is unique and once we meet with you we will be able to give you our best estimate of time and prognosis of outcome.",
  },
];
export default function Faqs() {
  return (
    <div className="dark-section">
      <div className="section-heading">
        <h2 className="section-header">FAQs</h2>
        <h3 className="section-subheader">
          Common Questions & Answers About <br />
          Our Pain Treatment Program
        </h3>
        <div className="questions-panel">
          <Collapse bordered={false} defaultActiveKey={["1"]}>
            {faqs.map((faq) => (
              <Panel header={faq.question} key={faq.id}>
                {faq.answer}
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
}
