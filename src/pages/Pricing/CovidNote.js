import React from "react";

export default function CovidNote() {
  return (
    <div className="covid-note">
      <h2 className="heading">A note on pricing during covid-19</h2>
      <p className="description">
        Due to current guidelines regarding COVID-19, our community room is at
        less than half capacity. Pricing reflects the necessary changes to our
        protocols--screening, distanced spacing, disinfecting--as well as
        additional equipment and supplies.
      </p>
      <p className="description">
        The Basic Rate sustains our practice at this time. If you are able,
        please consider the Supporter rate, which allows us to see patients at
        the Low Income Rate.{" "}
      </p>
      <p className="description">
        If the Supporter and Basic Rates are not within your budget, please {" "}
        <a
          href="https://bodypolitic.janeapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact us to schedule at the Low Income Rate.
        </a>
      </p>
    </div>
  );
}
