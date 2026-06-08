import "../style/knoppen.css";

export default function MailKnop({listing}){
  return (
          <a href={`mailto:${listing.contact.email}?subject=Solliteren voor ${listing.title}`} className="mail-link">Mail</a>
  );
};
