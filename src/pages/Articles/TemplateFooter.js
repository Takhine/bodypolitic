import React  from "react";
import {  useScrollTrigger, Slide } from "@material-ui/core";
import {Button} from 'antd';
// context


const ShowonScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 200,
  });
  return (
    <Slide appear={false} direction="up" in={trigger}>
      {children}
    </Slide>
  );
};


const Footer = ({ props }) => {
  return (
    <ShowonScroll {...props}>
      <div className="article-footer">
      <p className="footer-message"><b>Your initial consultation is free.</b> Come meet us in person and learn more.</p>
        <a
          style={{
            textDecoration: "none",
          }}
          href="https://bodypolitic.janeapp.com/"
          target="blank"
          rel="noopener noreferrer"
        >
          <Button className="footer-button">Free Consultation</Button>
        </a>
        <p className="footer-contact">Or, just call <a href="tel:(347) 709-0030"><span className="number">(347)709-0030</span></a> and we'll be happy to answer your questions.</p>
      </div>
    </ShowonScroll>
  );
};

export default Footer;
