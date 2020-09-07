import React from "react";
import { Card, Avatar } from "antd";
import client1 from  '../../../static/images/home/clients/client1.png'

const { Meta } = Card;

const clients = [
    {
        id: 1,
        name: "Ryme Katkhouda",
        date: "Aug 01, 2020",
        md: 12,
        message: `"This is a raving review of the expertise, results & work ethics of Mona Eldahry who has been working on me since she started mastering her acupuncture & started doctorate in Chinese medicine. Without it I would still suffer from overwhelming hay fever, allergies & debilitating migraines that started at 17 2-3 times a week! My immune system would still have been a trap for every flu in town. She also fixed my back pain, numbness in my right hand fingers because of a neck disk injury, head colds & sinus, fatigue, depression, lethargy, sleeplessness  ... I was a mess after a major fall and 911 exposure in the lower east side of Manhattan & Wall street! She is putting me back together one visit at a time. Her consultations are thorough & more scientifically based than most doctors I used to go see!! Her diagnostics, reparative acupuncture & herbal healings & cures are on the money. She is up to date on the latest solid modalities! And she sure knows how yo run a space, a program, a team!! I can’t wait to checkout her new practice space. I give her thumbs up!!"`,
        img: client1,
        alt: "Ryme Katkhouda Client Feedback",
      },
      {
        id: 2,
        name: "Ruah",
        date: "Aug 01, 2020",
        md: 12,
        message: `"I highly recommend Mona Eldahry, she has an incredible healing touch and wonderfully caring presence that is truly impressive.  Thanks to her acupuncture and body work techniques I felt an incredible release physically, mentally and emotionally.  I got so much out of our session - actual healing for my back injury and feeling a release and relaxation in my entire body.  I have already scheduled my next appointment!"`,
        img: client1,
        alt: "Ruah Client Feedback",
      },
]
export default function Testimonials() {
  return (
    <div className="light-section white">
      <div className="section-heading">
        <h3 className="section-subheader">
          Your body already knows how to heal.
        </h3>
        <p className="section-message">It just needs a little support.</p>
      </div>
      <div className="stars"></div>
      <div className="testimonial-content">
        {clients.map((client) => (
          <Card key={client.id} className="client-card">
            <Meta
              avatar={
                <Avatar
                  size="large"
                  className="client-profile"
                  src={client.img}
                  alt={client.alt}
                />
              }
              title={
                <div className="card-header">
                  <h4 className="client-name">{client.name}</h4>
                  <p className="client-date">{client.date}</p>
                </div>
              }
            />
            <p className="client-message">{client.message}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
