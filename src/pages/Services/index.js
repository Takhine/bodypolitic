import React, { useEffect } from "react";
import Process from "./Process";
import Community from "./Community";
import Banner from "./Banner";
import Acupuncture from "./Acupuncture";
import Herbal from "./Herbal";
import Virtual from "./Virtual";
import Body from "./Body";
import { Events } from "react-scroll";

const Services = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {});

    Events.scrollEvent.register("end", function (to, element) {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div id="services">
      <Banner />
      <Process />
      <Community />
      <Acupuncture />
      <Herbal />
      <Virtual />
      <Body />
    </div>
  );
};

export default Services;
