import React, { useEffect } from "react";
import Banner from "./Banner";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Benefits from "./Benefits";
import { Events } from "react-scroll";

const Home = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {});

    Events.scrollEvent.register("end", function (to, element) {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div id="homepage">
      <Banner />
      <Services />
      <Testimonials />
      <Benefits />
    </div>
  );
};

export default Home;
