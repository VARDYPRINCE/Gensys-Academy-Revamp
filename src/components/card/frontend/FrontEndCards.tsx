import "../cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import frontend from "../../../assets/images/Pathway Logo (3).png";
import { Link } from "react-router-dom";

const FrontEndCards = () => {
  return (
    <div className="cardswrapper">
      <article className="cardesignptn">
        <figure>
          <img src={frontend} alt="" />
        </figure>

        <div className="cardcontenz">
          <h2 className="cardstitle">Fron End Development</h2>
          <p className="cardstxts">
            Learn JavaScript design pattern and how to use React to develop
            interactive websites and web apps.
          </p>
          <div className="cardscurriculum">
            <Link to="/frontend" className="productdesign1">
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
      </article>
    </div>
  );
};

export default FrontEndCards;
