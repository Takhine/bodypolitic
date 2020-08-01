import React from "react";
import { Modal } from "antd";

export default function CommunityModal({ visible, hideComm }) {
  return (
    <Modal
      title="Community v/s Private Treatment"
      visible={visible}
      closable
      width={768}
      onCancel={hideComm}
      wrapClassName="covid-modal"
      footer={null}
      zIndex={2000}
    >
      <div className="section-heading">
        <h2 className="section-subheader">
          If you want to get acupuncture, but are not sure whether to get a
          private or community acupuncture treatment, here are some things to
          consider:
        </h2>
        <h3 className="section-header">Community Acupuncture</h3>
        <p className="section-description">
          6-12 people receive treatment in the same room. If you like the idea
          of relaxing with others, this is for you. And since acupuncture
          affects our qi, or energy, in addition to the physical body, many
          believe that the energy cultivated in group acupuncture settings can
          have a healing effect on its own.
        </p>
        <p className="section-description">
          Because the space is shared, your acupuncturist may only use points on
          areas of the body easily accessible in public. This is usually
          sufficient, but can be an issue with certain presentations and with
          clients who prefer to avoid even minimal public exposure.
        </p>
        <p className="section-description">
          Your acupuncturist will usually spend 15 minutes with you.
        </p>
        <p className="section-description">
          Community acupuncture is set up to provide needle-based treatments
          that are both simple and elegant.
        </p>
        <h3 className="section-header">Private or Semi-private Acupuncture</h3>
        <p className="section-description">
          This is done in a separate room, so your acupuncturist can access a
          wider range of points and utilize a broader range of{" "}
          <b>related therapies</b> including cupping, gua sha, herbal formulas
          and manual techniques.
        </p>
        <p className="section-description">
          You'll have more time to tell your acupuncturist what you're working
          on and share lab results and other information. Likewise, your
          acupuncturist will have more time to work with you.{" "}
        </p>
        <p className="section-description">
          This is great for people who want an added layer of social distancing
          and for those whose insurance covers acupuncture.
        </p>
      </div>
    </Modal>
  );
}
