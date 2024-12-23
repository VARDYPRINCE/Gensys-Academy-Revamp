import "../cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import productdesign from "../../../assets/images/Pathway Logo (1).png";
import { Link } from "react-router-dom";

const Productdesigncards = () => {
  return (
    <div className="cardswrapper">
      <div className="cardesignptn">
        <img src={productdesign} alt="" />

        <div className="cardcontenz">
          <div className="cardstitle">Product Design</div>
          <div className="cardstxts">
            Learn to build brands and transform ideas into digital solutions
            with good marketing strategies.
          </div>
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
      </div>
    </div>
  );
};

export default Productdesigncards;
