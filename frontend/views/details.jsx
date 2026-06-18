import { Toaster } from "sonner";
import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import MailButton from "../components/MailButton";
import ShareButton from "../components/ShareButton";
import SaveButton from "../components/SaveButton";

export const Details = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const currentPageUrl = window.location.href;
  

  useEffect(() => {
    fetch(`/api/listings/${id}`)
      .then(response => response.json())
      .then(data => setListing(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!listing) {
    return <div>Loading...</div>;
  }

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
        <MailButton listing={listing} />
        <ShareButton url={currentPageUrl} />
        <SaveButton listing={listing} /> 
        </div>

    </div>
  </div>
  )
};
