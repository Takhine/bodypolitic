import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import CommunityModal from "../../modals/CommunityModal";
import ProgressiveImage from "react-progressive-image";

import community from "../../static/images/services/community.jpg";
export default function Community() {
  const [communityModal, setComm] = useState(false);

  const showComm = () => {
    setComm(true);
  };

  const hideComm = () => {
    setComm(false);
  };
  return (
    <div className="community">
      <Row gutter={4}>
        <Col xs={24} sm={14} className="left-col">
          <div className="section-heading">
            <h2 className="section-header">Community Clinic</h2>
            <h3 className="section-subheader community-subheader">
              What would work for you,
              <br />
              Community or Private Treatment?
            </h3>
          </div>
          {/*<p className="description">
            We opened the community clinic recentlou to address the increasing
            need, now more than ever, for safe, affordable healthcare. Schedule a Private Acupuncture Treatment or join us for Community Acupuncture.
  </p>*/}
          <Button
            onClick={() => {
              showComm();
            }}
            className="community-button"
          >
            Community v/s Private Acupuncture
          </Button>
        </Col>
        <Col xs={24} sm={10} className="right-col">
          <div className="image-container">
            <ProgressiveImage
              src={community}
              placeholder="/images/placeholders/community-placeholder.jpg"
              delay={1500}
            >
              {(src, loading) => (
                <img
                  style={{ filter: loading ? "blur(2px)" : "blur(0px)" }}
                  width="100%"
                  src={src}
                  alt="Community"
                />
              )}
            </ProgressiveImage>
          </div>
        </Col>
      </Row>
      <CommunityModal visible={communityModal} hideComm={hideComm} />
    </div>
  );
}
