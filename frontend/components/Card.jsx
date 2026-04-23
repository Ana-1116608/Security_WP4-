import React from "react";
import "./Card.css";

export const Card = () => {
  return ( 
  <div className="card-container">
    
    <img src="https://picsum.photos/300/200" 
    alt="Card Image" 
    className="card-img" />

    <h1 className="card-title">Frontend developer</h1>
    <div className="card-jobtitle">Banana Computers</div>
    <div className="card-date">Begin datum: 01-01-2023</div>

    <a href="cardpage" className="card-link">Learn more</a>
    </div>
  );
};
