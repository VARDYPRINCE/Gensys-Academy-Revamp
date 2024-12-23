import "../cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import backend from "../../../assets/images/Pathway Logo (4).png";
import { Link } from "react-router-dom";

const BackEndCards = () => {
  return (
    <div className="cardswrapper">
      <div className="cardesignptn">
        <img src={backend} alt="" />

        <div className="cardcontenz">
          <div className="cardstitle">Back End Development</div>
          <div className="cardstxts">
            Get educated on JavaScript advanced topics: RegExp, design patterns,
            OOP and APIs.
          </div>
          <div className="cardscurriculum">
            <Link to="backend"  className="productdesign1">
            
            <button className="cardscurriculumbtn">
              {" "}
              View Curriculum{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="arrowiconforcards"
              />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEndCards;
