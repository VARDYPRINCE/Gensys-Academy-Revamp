import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import gensyslogo from "../../assets/images/Genesys logo 1.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
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

  return (
    <nav className="navwrapper">
      <header className="navbar">
        <div className="nav">
          <img src={gensyslogo} alt="Gensys Logo" />
          <span className="ln"></span>
          <span className="nav_academy">Academy</span>
        </div>
        <ul className="nav_paths">
          <li>
            <button
              className="navlinktags"
              onClick={() => handleSectionClick("pathways")}
            >
              Pathways
            </button>
          </li>
          <li>
            <button
              className="navlinktags"
              onClick={() => handleSectionClick("testimony")}
            >
              Testimonies
            </button>
          </li>
          <li className="tyf">
            <Link to="/contactus" className="navlinktags">
              Contact Us
            </Link>
          </li>
          <li className="tyf">
            <Link to="/faqs" className="navlinktags">
              FAQs
            </Link>
          </li>
        </ul>
        <div className="nav_btn">
          <Link to="/personaldata" className="navroute">
            <button className="navbtn">
              Get Started{" "}
              <FontAwesomeIcon icon={faArrowRight} className="arrowicon" />
            </button>
          </Link>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
