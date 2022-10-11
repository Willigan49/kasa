import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo de Kasa" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
