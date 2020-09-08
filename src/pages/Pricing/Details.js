import React from "react";

export default function Details() {
  return (
    <div className="details">
      <h2 className="detail-heading">Billing</h2>
      <p className="detail-subheading">
        At your first visit to the clinic, we store your credit or debit card
        information securely. We then take payment remotely 24 hours prior to
        each appointment.
      </p>
      <h2 className="detail-heading">Scheduling</h2>
      <p className="detail-subheading">
        In order to reduce administrative costs and to make it easier for you to
        achieve your health goals, we like to schedule your treatments for the
        calendar month. That way, we can spend less time scheduling. Should you
        decide to cancel or reschedule your appointment, just contact us or make
        the changes online.
      </p>
      <h2 className="detail-heading">Cancellation Policy</h2>
      <p className="detail-subheading">
        Any cancellations made later than 24 hours in advance will be charged
        the rate of the treatment. We appreciate your consideration on this
        matter.
      </p>
      <h2 className="detail-heading">Sliding Scale</h2>
      <p className="detail-subheading">
        The <b>Basic Rate</b> sustains our practice at this time. If you are
        able, please consider the <b>Supporter rate</b>, which allows us to see
        patients at the <b>Low Income Rate</b>.
        <br />
        If the Supporter and Basic Rates are not within your budget,{" "}
        <a
          href="https://bodypolitic.janeapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          please contact us to schedule at the Low Income Rate
        </a>
        .
      </p>
    </div>
  );
}
