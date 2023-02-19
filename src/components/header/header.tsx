import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img className="header-logo" src={logo} alt="Showtime Logo" />
        <p className="header-title">Showtime</p>
      </div>
      <div className="header-right">
        <Link className="header-link" to="/movies">
          Movies
        </Link>
        <Link className="header-link" to="/theatres">
          Theatres
        </Link>
        <Link className="header-link" to="/signin">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Header;
