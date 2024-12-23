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
    <div className="navwrapper">
      <div className="navbar">
        <div className="nav">
          <img src={gensyslogo} alt="logo" />
          <span className="ln"></span>
          <div className="nav_academy">Academy</div>
        </div>
        <div className="nav_paths">
          <button
            className="navlinktags"
            onClick={() => handleSectionClick("pathways")}
          >
            Pathways
          </button>
          <button
            className="navlinktags"
            onClick={() => handleSectionClick("testimony")}
          >
            Testimonies
          </button>
          <div className="tyf">
            <Link to="/contactus" className="navlinktags">
              Contact Us
            </Link>
          </div>
          <div className="tyf">
            <Link to="/faqs" className="navlinktags">
              FAQS
            </Link>
          </div>
        </div>
        <div className="nav_btn">
          <Link to="/personaldata" className="navroute">
            <button className="navbtn">
              Get Started{" "}
              <FontAwesomeIcon icon={faArrowRight} className="arrowicon" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
