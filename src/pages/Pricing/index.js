import React from "react";
import Banner from "./Banner";
import CovidNote from "./CovidNote";
import Details from "./Details";
import About from "./About";


const Pricing = () => {
  return (
    <div id="pricing">
      <Banner />
      <div className="disclaimer">
        <p className="disclaimer-content">
          Free Consultations and Virtual Herbal Consultations are available
        </p>
      </div>
      <CovidNote />
      <Details />
      <About />
    </div>
  );
};

export default Pricing;
