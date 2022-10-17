import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="wrapper">
      <Header />
      <div className="error">
        <div className="error__description">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <Link className="" to="/">Retourner sur la page d'Accueil</Link>
      </div>
      <Footer />
    </div>
  );
}
