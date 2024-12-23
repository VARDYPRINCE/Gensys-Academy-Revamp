import "../cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import frontend from "../../../assets/images/Pathway Logo (3).png";
import { Link } from "react-router-dom";

const FrontEndCards = () => {
  return (
    <div className="cardswrapper">
      <div className="cardesignptn">
        <img src={frontend} alt="" />

        <div className="cardcontenz">
          <div className="cardstitle">Fron End Development</div>
          <div className="cardstxts">
            Learn JavaScript design pattern and how to use React to develop
            interactive websites and web apps.
          </div>
          <div className="cardscurriculum">
            <Link to="/frontend"  className="productdesign1">
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

export default FrontEndCards;
