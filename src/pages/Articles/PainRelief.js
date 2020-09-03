import React, { useEffect } from "react";

import Banner from "./FirstTemplate/Banner";
import Pains from "./FirstTemplate/Pains";
import Testimonial from "./FirstTemplate/Testimonial";
import Working from "./FirstTemplate/Working";
import Therapies from "./FirstTemplate/Therapies";
import Process from "./FirstTemplate/Process";
import Faq from "./FirstTemplate/Faq";
import Location from "./FirstTemplate/Location";
import Contact from "./FirstTemplate/Contact";

import { Events } from "react-scroll";

import ReactPixel from 'react-facebook-pixel';
import {pixel} from '../../constants';
const PainRelief = () => {
  const advancedMatching = { fn: 'Mona' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
  const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: false, // enable logs
  };
  ReactPixel.pageView(); // For tracking page view

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) { });

    Events.scrollEvent.register("end", function (to, element) { });

    ReactPixel.init(pixel, advancedMatching, options);
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div id="article">
      <Banner />
      <div className="disclaimer">
        <p className="disclaimer-content">* Individual results vary. No guarantee of specific results is warranted or implied and your results will depend on many factors (full disclaimer).</p>
      </div>
      <Pains />
      <Testimonial />
      <Working />
      <Therapies />
      <Process />
      <Faq />
      <Location />
      <Contact />
    </div>
  );
};

export default PainRelief;
