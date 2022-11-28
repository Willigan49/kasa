import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <header>
      <div className="header">
        <img className="header__logo" src={logo} alt="logo de Kasa" />
        <nav>
          <ul className="menu">
            <li>
              <NavLink
                to="/"
                end
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
