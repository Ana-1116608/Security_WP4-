import "../style/knoppen.css";
import { Link } from "react-router-dom";

export default function DetailKnop({listing}){
  return (
          <Link to={`/details/${listing.id}`} className="detail-link">Bekijk afstudeerproject</Link>
  );
};
