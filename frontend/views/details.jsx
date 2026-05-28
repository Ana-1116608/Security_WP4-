import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "../style/details.css";
import { EmailShareButton, EmailIcon } from "react-share";
import { Toaster, toast } from "sonner";


export const Details = () => {
  const currentPageUrl = window.location.href;
  const {id} = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`/api/listings/${id}`)
      .then(response => response.json())
      .then(data => setListing(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!listing) {
    return <div>Loading...</div>;
  }

  const project = {
    id: listing.id,
    title: listing.title,
    date: listing.start_date,
    description: listing.description,
    company: listing.company?.name,
    contact: listing.contact?.name,
    email: listing.contact?.email
  };
  const saveProject = () => {
    const bestaandeproject =
    JSON.parse(localStorage.getItem("savedProject")) || [];

    const alreadysaved = bestaandeproject.find(
      (item) => item.id === project.id
    );

    if (!alreadysaved) {
      const updateProject = [...bestaandeproject, project];
      localStorage.setItem("savedProject", JSON.stringify(updateProject));
      toast.success("Project opgeslagen");
      return true;
      } else {
        toast.error("Project bestaat al");
        return false;
      }
    };

    const savelisting = () => {
  const saved = saveProject();
  if (saved) {
    setTimeout(() => {
      window.location.href = "/saved_card";
    }, 950);
  }
};

return (
  <div className="card-container2" >
   <Toaster position="bottom-right" /> {}
    <div className="card-container" >
      <div className="card-title">{listing.title}</div>
      <div className="card-date">Begindatum: {listing.start_date}</div>
      <div className="card-description">{listing.description}</div>
      <div className="card-jobtitle">
        <p>{listing.company?.name}</p>
        <p>{listing.contact?.name}</p>
        <p>{listing.contact?.email}</p>
      </div>

      <div className="card-actions">
        <a href={`mailto:${listing.contact.email}?subject=Solliteren voor ${listing.title}`} className="mail-link">Mail</a>
        <a href={`mailto:?subject=Intressante stageplek: ${listing.company?.name} ${listing.title}&body=${currentPageUrl}`} className="share-link">Delen</a>
        <button onClick={savelisting} className="save-link">Save</button>
        </div>

    </div>
  </div>
  );
};
