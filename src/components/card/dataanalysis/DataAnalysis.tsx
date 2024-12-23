import "../cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import dataanalysis from "../../../assets/images/Pathway Logo (8).png";
import { Link } from "react-router-dom";

const DataAnalysis = () => {
  return (
    <div className="cardswrapper" id="cardcenter">
      <div className="cardesignptn" >
        <img src={dataanalysis} alt="" />

        <div className="cardcontenz" >
          <div className="cardstitle">Data Analysis</div>
          <div className="cardstxts">
            Learn to use statistical techniques, data visualization and advanced
            analytics to make real-world impact.
          </div>
          <div className="cardscurriculum">
            <Link to="/dataanlysis"  className="productdesign1">
            
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

export default DataAnalysis;
