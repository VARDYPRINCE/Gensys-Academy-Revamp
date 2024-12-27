import "../cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import backend from "../../../assets/images/Pathway Logo (4).png";
import { Link } from "react-router-dom";

const BackEndCards = () => {
  return (
    <div className="cardswrapper">
      <article className="cardesignptn">
        <figure>
        <img src={backend} alt="Back End Development Logo" />
        </figure>

        <div className="cardcontenz">
          <h2 className="cardstitle">Back End Development</h2>
          <p className="cardstxts">
            Get educated on JavaScript advanced topics: RegExp, design patterns,
            OOP, and APIs.
          </p>
          <div className="cardscurriculum">
            <Link to="backend" className="productdesign1">
              <button className="cardscurriculumbtn">
                View Curriculum{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="arrowiconforcards"
                />
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BackEndCards;
