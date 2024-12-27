import "../cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import qualityassurance from "../../../assets/images/Pathway Logo (6).png";
import { Link } from "react-router-dom";

const QualityAssurance = () => {
  return (
    <div className="cardswrapper" id="cardcenter">
      <article className="cardesignptn">
        <figure>
          <img src={qualityassurance} alt="" />
        </figure>

        <div className="cardcontenz">
          <h2 className="cardstitle">Quality Assurance</h2>
          <p className="cardstxts">
            Develop skills in testing methodologies, defect tracking, and
            ensuring industry standard products of top quality.
          </p>
          <div className="cardscurriculum">
            <Link to="/qa" className="productdesign1">
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

export default QualityAssurance;
