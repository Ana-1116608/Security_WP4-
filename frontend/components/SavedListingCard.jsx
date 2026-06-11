import "../style/saved_card.css";
import MailKnop from "./MailKnop";

const copyLink = () => {
      navigator.clipboard.writeText(currentPageUrl)
        .then(() => {
          toast.success("Link is gekopieerd");
        })
        .catch((error) => {
          toast.error("Link kan niet worden gekopieerd");
        });
    };

export default function SavedListingCard({project}) {
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
        <MailKnop
            key={project.id} listing={project}>
         </MailKnop>
        <button onClick={copyLink} className="share-link">Delen</button>
      </div>
    </div>
  );
};
