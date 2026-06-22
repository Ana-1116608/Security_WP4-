import "../style/button.css";
import { toast } from "sonner";

export default function ShareButton({url}){
    const copyLink = () => {
      navigator.clipboard.writeText(url)
        .then(() => {
          toast.success("Link is gekopieerd");
        })
        .catch((error) => {
          toast.error("Link kan niet worden gekopieerd");
        });
    };
    
  return (
    <button onClick={copyLink} className="button">Delen</button>
  );
};
