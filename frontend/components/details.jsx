import React from "react";
import "./details.css";
import { FacebookShareButton, FacebookIcon, EmailShareButton, EmailIcon } from "react-share";

const currentPageUrl = window.location.href;

export const Details = () => {
  return (
<div className="card-container2" >

    <div className="card-container" >
      <div className="card-title">Backend developer</div>
      <div className="card-date">Begindatum: 01-01-2023</div>
      <div className="card-description">Short description</div>
      <div className="card-jobtitle">
        <p>Banana Computers</p>
        <p>Tim Banana</p>
        <p>t.banana@banana.example.com</p>
      </div>

      <div className="card-actions">
      <a href="mailto:info@banana.com" className="mail-link">Mail</a>

      <div className="share-button">

        <FacebookShareButton
          url={currentPageUrl}
          quote="Check out this job opportunity!"
          hashtag="#stage"
          >
          <FacebookIcon />
          </FacebookShareButton>

        <EmailShareButton
          url={currentPageUrl}
          subject="Check out this job opportunity!"
          body="I found this job opportunity and thought you might be interested: "
        >
          <EmailIcon />
        </EmailShareButton>

        </div>

      </div>

      </div>
  </div>

  );
};
