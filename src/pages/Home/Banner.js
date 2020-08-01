import React from "react";
import ProgressiveImage from "react-progressive-image";
import { Button } from "antd";
import { Link } from "react-scroll";
import FadeIn from "react-fade-in";
import homeBanner from "../../static/images/banners/home-banner.jpg";
import homeBannerPlaceholder from "../../static/images/banners/home-banner-placeholder.jpg";
import homebannerMobile from "../../static/images/banners/home-banner-mobile.jpg";
import homebannerMobilePlaceholder from "../../static/images/banners/home-banner-mobile.jpg";

export default function Banner() {
  return (
    <div className="home-banner">
      <ProgressiveImage
        src={homeBanner}
        placeholder={homeBannerPlaceholder}
        delay={1500}
      >
        {(src, loading) => (
          <img
            style={{ filter: loading ? "blur(3px)" : "blur(0px)" }}
            className="desktop-banner"
            width="100%"
            src={src}
            alt="Body Politic Herbs"
          />
        )}
      </ProgressiveImage>
      <ProgressiveImage
        src={homebannerMobile}
        placeholder={homebannerMobilePlaceholder}
        delay={1500}
      >
        {(src, loading) => (
          <img
            style={{ filter: loading ? "blur(3px)" : "blur(0px)" }}
            className="mobile-banner"
            width="100%"
            src={src}
            alt="Body Politic Herbs"
          />
        )}
      </ProgressiveImage>
      <Link
        activeClass="active"
        to="insurance"
        spy={true}
        smooth={true}
        duration={500}
        offset={-150}
      >
        <p className="insurance-message">Health Insurance?</p>
      </Link>
      <div className="banner-message">
        <FadeIn delay="600">
          <h2 className="main-message">
            Let food be thy medicine <br />
            and medicine be thy food
          </h2>
        </FadeIn>
        {/*<div className="usp-container">
          <p className="usp">Acupuncture</p>
          <img className="lines" src="/images/icons/line.png" alt="Line" />
          <p className="usp">Herbs</p>
          <img className="lines" src="/images/icons/line.png" alt="Line" />
          <p className="usp">Food</p>
        </div>*/}
        <div className="buttons-container">
          <a
            href="https://bodypolitic.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="new-client">New Client</Button>
          </a>
          <a
            href="https://bodypolitic.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="repeating-client">Returning Client</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
