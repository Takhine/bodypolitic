import React, { useState } from "react";
import { Row, Col, Card, Button, Modal } from "antd";
import {
  acupunture1,
  acupunture2,
  acupunture3,
  acupunture4,
} from "../../helpers";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
// images 
import ellipse from "../../static/images/ellipse-placeholder.png";
import ellipsePlaceholder from "../../static/images/ellipse-placeholder.png";
import arrowRight from "../../static/images/icons/arrow-right.svg";
 
const ListModal = ({ visible, handleClose }) => {
  return (
    <Modal
      title="According to the World Health Organization (WHO)"
      visible={visible}
      closable
      width={768}
      onCancel={handleClose}
      wrapClassName="list-modal"
      footer={null}
      zIndex={2000}
    >
      <div className="list-content">
        <h3 className="list-header">
          The following diseases and conditions have been shown through
          controlled clinical trials to be treated effectively with acupuncture:
        </h3>

        <div className="ailment-list">
          <Row gutter={8}>
            {acupunture1.map((item) => (
              <Col key={item.name} xs={24} sm={12}>
                <p className="modal-ailment">
                  <img
                    width={50}
                    src={ellipse}
                    alt="list-icon"
                  />
                  {item.name}
                </p>
              </Col>
            ))}
          </Row>
        </div>
        <h3 className="list-header">
          The efficacy of acupuncture at treating following diseases, symptoms
          and conditions is in the process of being proven through clinical
          trials:
        </h3>

        <div className="ailment-list">
          <Row gutter={8}>
            {acupunture2.map((item) => (
              <Col key={item.name} xs={24} sm={12}>
                <p className="modal-ailment">
                  <img
                    width={50}
                    src={ellipsePlaceholder}
                    alt="list-icon"
                  />
                  {item.name}
                </p>
              </Col>
            ))}
          </Row>
        </div>
        <h3 className="list-header">
          In addition, the WHO says about the following conditions,{" "}
          <i>
            "…acupuncture is worth trying because treatment by conventional and
            other therapies is difficult"
          </i>
          :
        </h3>

        <div className="ailment-list">
          <Row gutter={8}>
            {acupunture3.map((item) => (
              <Col key={item.name} xs={24} sm={12}>
                <p className="modal-ailment">
                  <img
                    width={50}
                    src={ellipsePlaceholder}
                    alt="list-icon"
                  />
                  {item.name}
                </p>
              </Col>
            ))}
          </Row>
        </div>
        <h3 className="list-header">
          Lastly, acupuncture may be tried for the following life-threatening
          conditions provided the practitioner has special modern medical
          knowledge and adequate monitoring equipment:
        </h3>
      </div>
      <div className="ailment-list">
        <Row gutter={8}>
          {acupunture4.map((item) => (
            <Col key={item.name} xs={24} sm={12}>
              <p className="modal-ailment">
                <img
                  width={50}
                  src={ellipsePlaceholder}
                  alt="list-icon"
                />
                {item.name}
              </p>
            </Col>
          ))}
        </Row>
      </div>
    </Modal>
  );
};
export default function Services() {
  const [visible, setModal] = useState(false);

  const handleClose = () => {
    setModal(false);
  };

  const handleOpen = () => {
    setModal(true);
  };

  return (
    <div className="treatments">
      <div className="section-heading services-heading">
        <h2 className="section-header">Treatments</h2>
        <h3 className="section-subheader">How can we help you?</h3>
        <h1
          className="section-description service-description"
          style={{ textAlign: "center", maxWidth: "900" }}
        >
          Body Politic works with you with holistically to find what your body
          needs, even in the face of illness. Book your Free Consultation Today!
        </h1>
      </div>
      <Row gutter={16} className="services-row">
        <Col xs={24} md={12} className="left-col">
          <Card className="light-card service-card">
            <h4 className="card-heading">Acupunture</h4>
            <p className="card-description">
              Acupuncture can resolve pain and improve sleep, digestion and
              overall well-being.
            </p>
            {/*<p className="card-description">
              These diseases and conditions have been shown through controlled
              clinical trials to be treated effectively with acupuncture:
  </p>*/}
            <ul className="ailment-list">
              <Fade>
                <li className="ailment">
                  <img
                    width={50}
                    src={ellipsePlaceholder}
                    alt="list-icon"
                  />{" "}
                  Musculoskeletal Pain
                </li>
                <li className="ailment">
                  <img
                    width={50}
                    src={ellipsePlaceholder}
                    alt="list-icon"
                  />{" "}
                  Digestive Problems
                </li>
                <li className="ailment">
                  <img
                    width={50}
                    src={ellipsePlaceholder}
                    alt="list-icon"
                  />{" "}
                  Post-Operative Pain
                </li>
                <li className="ailment">
                  <img
                    width={50}
                    src={ellipsePlaceholder}
                    alt="list-icon"
                  />{" "}
                  Fertility and Perinatal Support
                </li>
                <li className="ailment">
                  <img
                    width={50}
                    src={ellipsePlaceholder}
                    alt="list-icon"
                  />{" "}
                  Herniated Disk Pain
                </li>
                <li className="ailment">
                  <img
                    width={50}
                    src={ellipsePlaceholder}
                    alt="list-icon"
                  />{" "}
                  Sciatica
                </li>
                <li className="ailment">
                  <img
                    width={50}
                    src={ellipsePlaceholder}
                    alt="list-icon"
                  />{" "}
                  Hypertension (Essential)
                </li>
                <li className="ailment">
                  <img
                    width={50}
                    src={ellipsePlaceholder}
                    alt="list-icon"
                  />{" "}
                  Headaches
                </li>
              </Fade>
            </ul>
            <p className="card-description">
              Check out this list provided by the World Health Organization!
              (WHO)
            </p>
            <Button onClick={handleOpen} className="full-list">
              Full List
            </Button>
          </Card>
        </Col>
        <Col xs={24} md={12} className="right-col">
            <Card className="dark-card secondary-card">
              <h4 className="card-heading">Herbs & Diet</h4>
              <Fade>
                <p className="card-description">
                  Herbs and diet support our bodies from the inside out. Dietary
                  changes are often all that is necessary to make major changes
                  in your health. Traditional Chinese herbal formulas and
                  dietary supplements may also be used to support your body in
                  the process of becoming more and more balanced.
                </p>
              </Fade>
            </Card>
            <Card className="light-card secondary-card">
              <h4 className="card-heading">Body Alignment</h4>
              <Fade>
                <p className="card-description">
                  Gentle manual and external energetic techniques
                  (ortho-bionomy) can facilitate your body's process of
                  correcting its own balance and alignment.
                </p>
              </Fade>
            </Card>
            <Card className="dark-card secondary-card">
              <h4 className="card-heading">Explore Other Treatments</h4>
              <p className="card-description" style={{ textAlign: "center" }}>
                Biomagnetic Therapy, Shoni Shin, Tui Na, Cupping, Gua Sha
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <NavLink exact to="/services">
                  <Button className="arrow-button">
                    <img src={arrowRight} alt="Arrow" />
                  </Button>
                </NavLink>
              </div>
            </Card>
        </Col>
      </Row>
      <ListModal visible={visible} handleClose={handleClose} />
    </div>
  );
}
