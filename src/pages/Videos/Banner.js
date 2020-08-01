import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { Row, Col, Button } from "antd";
import youtube from "../../static/images/icons/white-youtube.svg";
import ReactPlayer from "react-player";
import { useMediaQuery, ClickAwayListener } from "@material-ui/core";

export default function Banner() {
  const [play, setPlay] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div className="videos-banner">
      <div className="dark-background" />
      <Row className="video-row">
        <Col className="left-col" xs={24} md={12} lg={11}>
          <FadeIn delay="600">
            <h2 className="banner-heading">Video Gallery</h2>
          </FadeIn>
          <h1 className="banner-subheading">
            Learn more about our work with acupuncture by viewing testimonials,
            explainer videos, discussions & more.
          </h1>

          <a
            href="https://www.youtube.com/channel/UC1u4kr-JMJwwr_ayABade9Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="outlink-container">
              <img src={youtube} alt="Mona Eldahry YouTube Channel" />
              <h3 className="channel-text">Visit Channel</h3>
            </Button>
          </a>
        </Col>
        <Col className="right-col" xs={24} md={12} lg={13}>
          <h3 className="testimonial-text">Testimonial</h3>
          <ClickAwayListener onClickAway={() => setPlay(false)}>
            <ReactPlayer
              style={{
                width: "100%",
                height: "80%",
              }}
              onPlay={() => setPlay(true)}
              onPause={() => setPlay(false)}
              height={isMobile ? "250px" : "400px"}
              width="100%"
              url={`https://www.youtube.com/watch?v=NV0lYX46Hj8`}
              controls={true}
              // light={thumbnail}
              playIcon={null}
              playing={play}
            />
          </ClickAwayListener>
        </Col>
      </Row>
    </div>
  );
}
