import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./style/Header.css";

export default function Header() {
  return (
    <header>
      <div className="header">
        <img className="logo" src={logo} alt="logo de Kasa" />
        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
