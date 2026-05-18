import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = () => {
  return ( 
<div className="card-container2" >
    
    <div className="card-container" >
      <div className="card-title">Frontend developer</div>
      <div className="card-jobtitle">Banana Computers</div>
      <div className="card-date">Begindatum: 01-01-2023</div>

      <div className="card-actions">
      <Link to="/details" className="detail-link">Bekijk afstudeerproject</Link>
      <a href="mailto:info@banana.com" className="mail-link">Mail</a>
      </div>

      </div>


    
    <div className="card-container">
      <div className="card-title">Backend developer</div>
      <div className="card-jobtitle">Zanzibar Web Services</div>
      <div className="card-date">Begindatum: 01-01-2023</div>

      <div className="card-actions">
      <Link to="/details" className="detail-link">Bekijk afstudeerproject</Link>
      <a href="mailto:info@zanzibar.com" className="mail-link">Mail</a>
      </div>

    </div>


<div className="card-container">
      <div className="card-title">Fullstack Developer</div>
      <div className="card-jobtitle">ACME</div>
      <div className="card-date">Begindatum: 01-01-2023</div>

      <div className="card-actions">
      <Link to="/details" className="detail-link">Bekijk afstudeerproject</Link>
      <a href="mailto:info@acme.com"className="mail-link">Mail</a>
      </div>

    </div>

    

  </div>






  );
};
