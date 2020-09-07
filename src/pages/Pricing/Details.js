import React from "react";

export default function Details() {
  return (
    <div className="details">
      <h2 className="detail-heading">Scheduling</h2>
      <p className="detail-subheading">
        In order to reduce administrative costs and to make it easier for you to
        achieve your health goals, we like to schedule your treatments for the
        calendar month. That way, we can spend less time scheduling. Should you
        decide to cancel or reschedule your appointment, just contact us or make
        the changes online.{" "}
      </p>
      <h2 className="detail-heading">Billing</h2>
      <p className="detail-subheading">
        We store your credit or debit card information securely and take payment
        remotely 24 hours prior to your appointment.
      </p>
      <h2 className="detail-heading">Cancellation Policy</h2>
      <p className="detail-subheading">
        Please note that any cancellations made later than 24 hours in advance
        will be charged the rate of the treatment. We appreciate your
        consideration on this matter.
      </p>
    </div>
  );
}
