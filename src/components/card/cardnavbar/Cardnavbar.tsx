// import "../../navbar/navbar.css";
import "./cardnavbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import gensyslogo from "../../../assets/images/Genesys logo 1.png";
import { Link } from "react-router-dom";

const Cardnavbar = () => {
  return (
    <div className="cardnavbarnavwrapper">
      <div className="cardnavbarnavbar">
        <div className="cardnavbarnav">
          <img src={gensyslogo} alt="logo" />
          <span className="cardnavbarln"></span>
          <div className="cardnavbarnav_academy">Academy</div>
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
    </div>
  );
};

export default Cardnavbar;

