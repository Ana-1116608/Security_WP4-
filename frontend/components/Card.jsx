import React from "react";
import "./Card.css";

export const Card = () => {
  return ( 
<div className="card-container2" >
    
    <div className="card-container" >
      <div className="card-title">Frontend developer</div>
      <div className="card-jobtitle">Banana Computers</div>
      <div className="card-date">Begindatum: 01-01-2023</div>

      <a href="cardpage" className="card-link">Bekijk afstudeerproject</a>
    </div>


    
    <div className="card-container">
      <div className="card-title">Backend developer</div>
      <div className="card-jobtitle">Zanzibar Web Services</div>
      <div className="card-date">Begindatum: 01-01-2023</div>

      <a href="cardpage" className="card-link">Bekijk afstudeerproject</a>
    </div>


    <div className="card-container">
      <div className="card-title">Fullstack Developer</div>
      <div className="card-jobtitle">ACME</div>
      <div className="card-date">Begindatum: 01-01-2023</div>

      <a href="cardpage" className="card-link">Bekijk afstudeerproject</a>
    </div>

    


    
</div>
    





  

  );
};
