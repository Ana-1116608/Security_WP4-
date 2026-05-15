import React from "react";
import "./details.css";

export const Details = () => {
  const project = {
    id: 1,
    title: "Backend developer",
    date: "01-01-2023",
    description:"short description",
    company: "Banana computers",
    contact: "Tim Banana",
    email: "t.banana@banana.example.com"
      
  };

  const saveproject = () => {

    const bestaandeproject =
    JSON.parse(localStorage.getItem("savedProject")) || [];

    const alreadysaved = existingProject.find(
      (item) => item.id === project.id
    );

    if (!alreadysaved) {
      const updateProject =[
        existingProject,
        project
      ];
      localStorage.setItem(
        "savedProjects",
        JSON.stringify(updateProject)
      );

      alert("Project opgeslagen");
      } else {
        alert ("Project bestaat al");
      }
    };


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
