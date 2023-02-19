import logo from "../../assets/logo.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src={logo} alt="Movie Booking App" />
          <span>Showtime</span>
        </div>
        <div className="links">
          <a href="#">About</a>
          <a href="#">FAQ</a>
          <a href="#">Contact Us</a>
          <a href="#">Terms of Use</a>
        </div>
        <p style={{ fontWeight: "bold" }}>&copy; 2023 Sribalaji &trade;</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
