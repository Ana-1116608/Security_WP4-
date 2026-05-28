import "../style/saved_card.css";

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
        <a href={`mailto:${listing.contact.email}?subject=Solliteren voor ${listing.title}`} className="mail-link">Mail</a>
      </div>
    </div>
  );
};
