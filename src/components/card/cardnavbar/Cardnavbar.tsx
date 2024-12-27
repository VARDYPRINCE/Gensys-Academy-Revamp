// import "../../navbar/navbar.css";
import "./cardnavbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import gensyslogo from "../../../assets/images/Genesys logo 1.png";
import { Link } from "react-router-dom";

const Cardnavbar = () => {
  return (
    <nav className="cardnavbarnavwrapper">
      <div className="cardnavbarnavbar">
        <div className="cardnavbarnav">
          <img src={gensyslogo} alt="Gensys Logo" />
          <span className="cardnavbarln"></span>
          <h1 className="cardnavbarnav_academy">Academy</h1>
        </div>
        <div className="cardnavbarnav_btn">
          <Link to="/personaldata" className="navroute">
            <button className="navbtn">
              Get Started{" "}
              <FontAwesomeIcon icon={faArrowRight} className="arrowicon" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Cardnavbar;

