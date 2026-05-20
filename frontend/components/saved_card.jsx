import React, { useEffect, useState} from "react";
import "./saved_card.css";
import { EmailShareButton } from "react-share";

export const SavedCard = () => {
  const [savedProjects, setSavedProjects] = useState([]);
  const currentPageUrl = window.location.href;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedProject")) || [];
    setSavedProjects(saved);
  }, []);
