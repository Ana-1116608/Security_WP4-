import "../style/cards.css";
import "../style/button.css";
import MailButton from "./MailButton";
import ShareButton from "./ShareButton";
import { toast } from "sonner";

export default function SavedListingCard({project}) {
  const currentPageUrl = `${window.location.origin}/details/${project.id}`;

  return (
    <div key={project.id} className="card-container" >
      <div className="card-title">{project.title}</div>
      <div className="card-date">Begindatum: {project.date}</div>
      <div className="card-description">{project.description}</div>
      <div className="card-jobtitle">
        <p>{project.company}</p>
        <p>{project.contact}</p>
        <p>{project.email}</p>
      </div>

      <div className="card-actions">
        <MailButton
            key={project.id} listing={project}>
         </MailButton>
         <ShareButton url={currentPageUrl} />
      </div>
    </div>
  );
};
