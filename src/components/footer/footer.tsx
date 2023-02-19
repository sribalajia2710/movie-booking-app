import logo from "../../assets/logo.png";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src={logo} alt="Movie Booking App" />
          <span>Showtime</span>
        </div>
        <div className="links">
          <Link className="header-link" to="/movies">
            About
          </Link>
          <Link className="header-link" to="/theatres">
            FAQs
          </Link>
          <Link className="header-link" to="/signin">
            Contact us
          </Link>
          <Link className="header-link" to="/signin">
            Terms of Use
          </Link>
        </div>
        <p style={{ fontWeight: "bold" }}>&copy; 2023 Sribalaji &trade;</p>
        <div className="social-icons">
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
