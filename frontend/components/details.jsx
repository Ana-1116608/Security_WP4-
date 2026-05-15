import React from "react";
import "./details.css";

export const Details = () => {
  const vacature = {
    id: 1,
    title: "Backend developer",
    date: "01-01-2023",
    description:"short description",
    company: "Banana computers",
    contact: "Tim Banana",
    email: "t.banana@banana.example.com"
      
  };
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
      </div>

      </div>
  </div>

  );
};
