import "../cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import productdesign from "../../../assets/images/Pathway Logo (1).png";
import { Link } from "react-router-dom";

const Productdesigncards = () => {
  return (
    <div className="cardswrapper">
      <article className="cardesignptn">
        <figure>
          <img src={productdesign} alt="" />
        </figure>

        <div className="cardcontenz">
          <h2 className="cardstitle">Product Design</h2>
          <p className="cardstxts">
            Learn to build brands and transform ideas into digital solutions
            with good marketing strategies.
          </p>
          <div className="cardscurriculum">
            <Link to="/productdesign" className="productdesign1">
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

export default Productdesigncards;
