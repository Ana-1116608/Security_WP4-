import "../style/knoppen.css";

export default function MailKnop({listing}){
  const email = listing.email || listing.contact?.email;
  return (
          <a href={`mailto:${email}?subject=Solliteren voor ${listing.title}`} className="mail-link">Mail</a>
  );
};
