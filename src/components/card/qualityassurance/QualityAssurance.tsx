import "../cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import qualityassurance from "../../../assets/images/Pathway Logo (6).png";
import { Link } from "react-router-dom";

const QualityAssurance = () => {
  return (
    <div className="cardswrapper"id="cardcenter">
      <div className="cardesignptn" >
        <img src={qualityassurance} alt="" />

        <div className="cardcontenz">
          <div className="cardstitle">Quality Assurance</div>
          <div className="cardstxts">
            Develop skills in testing methodologies, defect tracking, and
            ensuring industry standard products of top quality.
          </div>
          <div className="cardscurriculum">
            <Link to="/qa"  className="productdesign1">
            
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

export default QualityAssurance;
