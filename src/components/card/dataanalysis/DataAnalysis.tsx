import "../cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import dataanalysis from "../../../assets/images/Pathway Logo (8).png";
import { Link } from "react-router-dom";

const DataAnalysis = () => {
  return (
    <div className="cardswrapper" id="cardcenter">
      <article className="cardesignptn">
        <figure>
          <img src={dataanalysis} alt="Data Analysis Illustration" />
        </figure>

        <div className="cardcontenz">
          <h2 className="cardstitle">Data Analysis</h2>
          <p className="cardstxts">
            Learn to use statistical techniques, data visualization, and
            advanced analytics to make real-world impact.
          </p>
          <div className="cardscurriculum">
            <Link to="/dataanalysis" className="productdesign1">
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

export default DataAnalysis;
