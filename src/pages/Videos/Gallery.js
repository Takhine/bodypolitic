import React, { useState } from "react";
import { videos } from "../../helpers";
import { Row, Col, Card } from "antd";
import youtube from "../../static/images/icons/blue-youtube.svg";
import VideoModal from "./VideoModal";
import { Modal, DialogContent } from "@material-ui/core";
import Fade from "react-reveal/Fade";
const { Meta } = Card;
export default function Gallery() {
  const [modal, setModal] = useState({
    yid: null,
    open: false,
  });
  const handleOpen = (link) => {
    setModal({
      ...modal,
      yid: link,
      open: true,
    });
  };

  const handleClose = () => {
    setModal({
      ...modal,
      yid: null,
      open: false,
    });
  };
  return (
    <div className="gallery">
      <div className="section-heading video-heading">
        <h2 className="section-header">Video Gallery</h2>
        <h3 className="section-subheader">Discover more about our practice</h3>
      </div>
      <div className="videos-container">
        <Row gutter={8}>
          {videos.map((video) => (
            <Col className="video-col" key={video.id} xs={24} md={12} xl={8}>
              <Fade>
                <Card
                  onClick={() => {
                    handleOpen(video.link);
                    console.log(video.link);
                  }}
                  bordered={false}
                  className="video-card"
                  cover={<img alt={video.name} src={video.img} />}
                >
                  <Meta title={video.name} description={video.date} />
                  <img
                    className="youtube"
                    src={youtube}
                    alt="Mona Eldahry YouTube Channel"
                  />
                </Card>
              </Fade>
            </Col>
          ))}
        </Row>
      </div>
      <Modal open={modal.open} onClose={handleClose}>
        <DialogContent className="modal-dialog">
          <VideoModal className="modal_styles" youtubeId={modal.yid} />
        </DialogContent>
      </Modal>
    </div>
  );
}
