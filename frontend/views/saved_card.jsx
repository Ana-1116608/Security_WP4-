import React, { useEffect, useState} from "react";
import SavedListingCard from "../components/SavedListingCard";

export const SavedCard = () => {
  const [savedProjects, setSavedProjects] = useState([]);
  const currentPageUrl = window.location.href;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedProject")) || [];
    setSavedProjects(saved);
  }, []);

  return (
    <div className="card-container2" >
      {savedProjects.map((project) => (
        <SavedListingCard
        key={project.id} project={project}>
        </SavedListingCard>
      ))}
    </div>
  );
};
