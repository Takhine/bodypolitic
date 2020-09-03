import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import Fade from "react-reveal/Fade";

import client1 from "../../static/images/home/clients/client1.png";
import client2 from "../../static/images/home/clients/client2.png";
import client3 from "../../static/images/home/clients/client3.png";

const { Meta } = Card;

const header = (
  <div className="section-heading client-heading">
    <h2 className="section-header">Testimonanials</h2>
    <h3 className="section-subheader client-subheader">
      Check out our reviews{" "}
    </h3>
  </div>
);
const clients = [
  {
    id: 1,
    name: "Michelle Soriano",
    hasHeader: true,
    date: "Feb 27, 2019",
    md: 12,
    message: '"Buena experiencia atención con el paciente muy professional"',
    img: client1,
    alt: "Michelle Soriano Client from Yelp",
  },
  {
    id: 2,
    name: "Blake S.",
    date: "Dec 22, 2015",
    md: 12,
    message:
      '"Very nurturing and caring practitioner who is always at the cutting edge of wellness research. Our experience with Mona has been very positive. We look forward to seeing her for an acupuncture session."',
    img: client2,
    alt: "Blake S. Client from Yelp",
  },
  {
    id: 3,
    name: "Ruah B.",
    date: "June 29, 2018",
    md: 24,
    message:
      '"I highly recommend Mona Eldahry, she has an incredible healing touch and wonderfully caring presence that is truly impressive.  Thanks to her acupuncture and body work techniques I felt an incredible release physically, mentally and emotionally.  I got so much out of our session - actual healing for my back injury and feeling a release and relaxation in my entire body.  I have already scheduled my next appointment!"',
    img: client3,
    alt: "Ruah B. Client from Yelp",
  },
];
export default function Testimonials() {
  return (
    <div className="testimonials">
      <Row gutter={8} className="client-row">
        {clients.map((client) => (
          <Col key={client.id} xs={24} md={client.md} xl={8}>
            {client.hasHeader && header}
            <Fade>
              <Card className="client-card">
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
            </Fade>
          </Col>
        ))}
        <Col xs={24}>
          <Fade>
            <Card className="client-card">
              <Meta
                avatar={
                  <Avatar
                    size="large"
                    className="client-profile"
                    src={client1}
                    alt="Ruah Client Feedback"
                  />
                }
                title={
                  <div className="card-header">
                    <h4 className="client-name">Ryme Katkhouda</h4>
                    <p className="client-date">Aug 01, 2020</p>
                  </div>
                }
              />
              <p className="client-message">
                "This is a raving review of the expertise, results & work ethics
                of Mona Eldahry who has been working on me since she started
                mastering her acupuncture & started doctorate in Chinese
                medicine. Without it I would still suffer from overwhelming hay
                fever, allergies & debilitating migraines that started at 17 2-3
                times a week! My immune system would still have been a trap for
                every flu in town. She also fixed my back pain, numbness in my
                right hand fingers because of a neck disk injury, head colds &
                sinus, fatigue, depression, lethargy, sleeplessness ... I was a
                mess after a major fall and 911 exposure in the lower east side
                of Manhattan & Wall street! She is putting me back together one
                visit at a time. Her consultations are thorough & more
                scientifically based than most doctors I used to go see!! Her
                diagnostics, reparative acupuncture & herbal healings & cures
                are on the money. She is up to date on the latest solid
                modalities! And she sure knows how yo run a space, a program, a
                team!! I can’t wait to checkout her new practice space. I give
                her thumbs up!!"
              </p>
            </Card>
          </Fade>
        </Col>
      </Row>
    </div>
  );
}
