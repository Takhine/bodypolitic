import React, { useEffect } from "react";

import Banner from "./FirstTemplate/Banner";
import Pains from "./FirstTemplate/Pains";
import Testimonial from "./FirstTemplate/Testimonial";
import Working from "./FirstTemplate/Working";
import Therapies from "./FirstTemplate/Therapies";
import Process from "./FirstTemplate/Process";
import Faq from "./FirstTemplate/Faq";
import Location from "./FirstTemplate/Location";

import { Events } from "react-scroll";

const PainRelief = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {});

    Events.scrollEvent.register("end", function (to, element) {});

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
    </div>
  );
};

export default PainRelief;
