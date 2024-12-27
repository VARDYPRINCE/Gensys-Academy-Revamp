import "./footer.css";
import genesyslogo from "../../assets/images/Genesys logo 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footerwrapper">
      <div className="footerptn">
        <div className="footerinfo">
          <div className="footerlogo">
            <img src={genesyslogo} alt="Genesys Tech Hub Logo" />
            <span className="footerlines"></span>
            <span className="footeracademy">ACADEMY</span>
          </div>
          <br />
          <address className="footerlocation">
            Kilometer 7, Enugu/Port Harcourt Expressway, Centenary City, Enugu,
            Nigeria.
          </address>
          <div className="footerdirections">Get Directions</div>
          <div className="footercontact">
            <div className="footerphone">
              <a href="tel:+2348001234567" className="telllink">
                <FontAwesomeIcon icon={faPhone} className="phoneicon" />
                +234 800 123 4567
              </a>
            </div>
            <div className="footeremail">
              <a href="mailto:info@genesys.com" className="telllink">
                <FontAwesomeIcon icon={faEnvelope} className="emailicon" />
                info@genesys.com
              </a>
            </div>
          </div>
        </div>

        <div className="footerquick">
          <h2 className="footerquicklinks">Quick Links</h2>
          <div className="nav_paths1">
            <span>
              <button
                className="navlinktags"
                onClick={() => handleSectionClick("pathways")}
              >
                Pathways
              </button>
            </span>
            <span>
              <button
                className="navlinktags"
                onClick={() => handleSectionClick("testimony")}
              >
                Testimonies
              </button>
            </span>
            <span>
              <Link to="/contactus" className="navlinktags1">
                Contact Us
              </Link>
            </span>

            <div>
              <Link to="/faqs" className="navlinktags1">
                FAQS
              </Link>
            </div>
          </div>
        </div>

        <div className="footerpathways">
          <h2 className="footerquicklinks3">Pathways</h2>
          <div className="nav_pathslink1">
            <Link to="/productdesign" className="navlinktags1">
              Product Design
            </Link>
            <Link to="/frontend" className="navlinktags1">
              Front End
            </Link>
            <Link to="/backend" className="navlinktags1">
              Back End
            </Link>
            <Link to="/dataanalysis" className="navlinktags1">
              Data Analysis
            </Link>
            <Link to="/qa" className="navlinktags1">
              Quality Assurance
            </Link>
          </div>
        </div>

        <div className="footerquicklinks33">
          <h2>Follow Us</h2>
          <div className="nav_pathslinkfollow">
            <a
              href="https://www.facebook.com/share/15PEx2fSYP/?mibextid=wwXIfr"
              className="navlinktags1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="socialicon" />
            </a>
            <a
              href="https://www.instagram.com/genesystechhub?igsh=b2x0OWgyanB5M3Nu"
              className="navlinktags1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="socialicon" />
            </a>
            <a
              href="https://x.com/genesystechhub"
              className="navlinktags1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="socialicon" />
            </a>
            <a
              href="https://linkedin.com"
              className="navlinktags1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="socialicon" />
            </a>
            <a
              href="https://youtu.be/Sazn07nmdh8?si=BbaPsuHF8hKX_Gce"
              className="navlinktags1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} className="socialicon" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="footerbottom">
          <p className="footercopyright">
            &copy; {currentYear} Gensys Tech Hub
          </p>
          <p className="footercopyright">Powered By Hubly</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
