import React from "react";
import { Modal, Alert } from "antd";
import { NavLink } from "react-router-dom";

// Images
import orange  from "../static/images/icons/orange-ellipse.svg";

export default function CovidModal({ visible, hideCovid }) {
  return (
    <Modal
      title="Covid-19 Updates"
      visible={visible}
      closable
      width={768}
      onCancel={hideCovid}
      wrapClassName="covid-modal"
      footer={null}
      zIndex={2000}
    >
      <div style={{marginTop: 0}} className="section-heading">
        <Alert
          message="Due to the COVID-19 pandemic, we are taking extra precautions with each patient including:"
          type="info"
          showIcon
          style={{marginBottom: '24px'}}
        />

        <h3 className="section-subheader">Our Role</h3>
        <p className="section-description">
          Surfaces in bathroom, office and treatment areas are thoroughly
          cleaned with hydrogen peroxide and hospital grade sanitizers
          frequently. Treatment tables and workstations are sanitized after each
          patient. Each table is dressed with clean linens that are changed
          after each patient. We're doing our part by:
        </p>
        <ul className="ailment-list">
          <li className="ailment">
            <img src={orange} alt="list-icon" /> <span>Prescreening</span>
          </li>
          <li className="ailment">
            <img src={orange} alt="list-icon" /> <span>Using increased
            personal protective equipment</span>
          </li>
          <li className="ailment">
            <img src={orange} alt="list-icon" /> <span>Using increased
            disinfection protocols as per CDC guidelines</span>
          </li>
        </ul>
        <h3 className="section-subheader">Your Role</h3>
        <ul className="ailment-list">
          <li className="ailment">
            <img src={orange} alt="list-icon" /> <span>You must wear your
            mask. If you forget to bring one, we will provide you with one</span>
          </li>
          <li className="ailment">
            <img src={orange} alt="list-icon"  /> <span>When you arrive,
            please wash your hands in the bathroom (first door on your left) and
            return to the waiting area for screening.</span>
          </li>
          <li className="ailment">
            <img src={orange} alt="list-icon" />
            <span>
              Your temperature will be checked in the waiting area. It must fall
              within the range set by the CDC in order for us to proceed with
              your treatment. If we can not proceed with treatment at the
              clinic,{" "}
              <NavLink exact to="/services">
                please schedule a virtual dietary, herbal consultation so we can
                safely support you
              </NavLink>.
            </span>
          </li>
          <li className="ailment">
            <img src={orange} alt="list-icon" /> <span>Remember to fill out
            the pre-screening questionnaire before each appointment.</span>
          </li>
        </ul>
      </div>
    </Modal>
  );
}
