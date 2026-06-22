import "../style/button.css";
import { toast } from "sonner";

export default function SaveButton({ listing }) {
  const project = {
    id: listing.id,
    title: listing.title,
    date: listing.start_date,
    description: listing.description,
    company: listing.company?.name,
    contact: listing.contact?.name,
    email: listing.contact?.email
  };
  const saveProject = () => {
    const bestaandeproject =
    JSON.parse(localStorage.getItem("savedProject")) || [];

    const alreadysaved = bestaandeproject.find(
      (item) => item.id === project.id
    );

    if (!alreadysaved) {
      const updateProject = [...bestaandeproject, project];
      localStorage.setItem("savedProject", JSON.stringify(updateProject));
      toast.success("Project opgeslagen");
      return true;
      } else {
        toast.error("Project bestaat al");
        return false;
      }
    };

    const savelisting = () => {
      const saved = saveProject();
      if (saved) {
        setTimeout(() => {
          window.location.href = "/saved_card";
          }, 950);
        }
      };

  return (
    <button onClick={savelisting} className="button">Save</button>
  );
};
