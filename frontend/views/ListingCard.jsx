import "./Card.css";
import { Link } from "react-router-dom";

export const ListingCard = ({listing}) => {
  return (
    <div key={listing.id} className="card-container" >
        <div className="card-title">{listing.title}</div>
        <div className="card-jobtitle">{listing.company.name}</div>
        <div className="card-date">{listing.start_date}</div>

        <div className="card-actions">
          <Link to={`/details/${listing.id}`} className="detail-link">Bekijk afstudeerproject</Link>
          <a href={`mailto:${listing.contact.email}`} className="mail-link">Mail</a>
        </div>
    </div>
  );
};

