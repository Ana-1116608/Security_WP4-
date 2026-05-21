import "./navbar.css";
import { Link} from "react-router-dom";

export const Navbar = () => {
    const Opgeslagen_projecten = () => {
      window.location.href = "/saved_card";
    };
  return (
    <nav className="nav" >
      <a href="/" className="project-overzicht">
        Overzicht
      </a>
      <ul>
        <li className="active">
          <button onClick={Opgeslagen_projecten} className="save-link">Opgeslagen Projecten</button>
        </li>
      </ul>
    </nav>
  );
};
