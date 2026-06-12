import "../style/cards.css";
import { Link } from "react-router-dom";
import DetailKnop from "./DetailKnop";
import MailKnop from "./MailKnop";

export default function ListingCard({listing}){
  return (
    <div key={listing.id} className="card-container" >
        <div className="card-title">{listing.title}</div>
        <div className="card-jobtitle">{listing.company.name}</div>
        <div className="card-date">{listing.start_date}</div>

        <div className="card-actions">
          <DetailKnop
            key={listing.id} listing={listing}>
          </DetailKnop>
          <MailKnop
            key={listing.id} listing={listing}>
          </MailKnop>
        </div>
    </div>
  );
};

