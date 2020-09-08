import React from "react";

export default function About() {
  return (
    <div className="about-pricing">
      <h2 className="about-subheader" style={{ textAlign: "center" }}>
        About Sliding Scale Pricing
      </h2>{" "}
      <p className="description">
        At your first visit to the clinic, we store your credit or debit card
        information securely. We then take payment remotely 24 hours prior to
        each appointment.
      </p>
      <h2 className="about-heading">What is it?</h2>
      <p className="description">
        A sliding scale is a handy way to meet people where they're at
        financially. Our goal is to make holistic care affordable. But what's
        affordable to one person might be a stretch for another. That's where
        the sliding scale comes in. You decide what's sustainable for you.
      </p>
      <h2 className="about-heading">How Does it Work?</h2>
      <p className="description"
      style={{
        marginBottom: '8px',
        fontWeight: '600'
      }}
      >We have three rates:</p>
      <ul className="description">
        <li>The Basic Rate allows us to cover our basic expenses.</li>
        <li>
          The Supporter Rate is higher and allows us to treat people at the Low
          Income Rate.
        </li>
        <li>
          The Low Income Rate is for those who need it. If you can't pay more,
          this rate is for you.
        </li>
      </ul>
      <h2 className="about-heading">Why Do We Do It?</h2>
      <p className="description">
        The sliding scale allows us to make holistic care affordable. This is
        especially important now as the cost of medical care is on the rise and
        paychecks are shrinking. Not to mention, we all need to be healthy in
        the face of a pandemic.
        <br />
        It also makes our business relevant to more people. Rather than
        appealing to one economic group, the sliding scale allows us to be of
        service to multiple groups of people.
        <br />
        The sliding scale is one of the things that we're doing to help our
        clinic and our communities survive COVID-19.
      </p>
    </div>
  );
}
