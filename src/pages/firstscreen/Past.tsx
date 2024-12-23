import "../landingstyles/landingpage.css";
import gcpic1 from "../../assets/images/_MG_4256 1.png";
import groupseven from "../../assets/images/Group 7.png";
import eclipse from "../../assets/images/Ellipse 6.png";
import together from "../../assets/images/_MG_1398 2.png";
const Past = () => {
  return (
    <div className="pastwrapper">
      <div className="pastit">Meet Our Past Interns</div>

      <div className="pastptn1">
        <div>
          <img src={gcpic1} alt="" />
        </div>
        <div>
          <div className="pastfloate1">
            <img src={groupseven} alt="" className="pastfloate1" />
          </div>
          <div className="pasttxext">
            We believe that Excellence is a culture and we are committed to a
            philosophy of consistent Improvement in everything we do, we are
            Passionate and Candid we trust in the power of Collaboration.
          </div>
          <div>
            <img src={eclipse} alt="" className="pastfloate2" />
          </div>
        </div>
      </div>

      {/* ------   */}
      <div className="pastptn1">
        <div className="pasttxext">
          We believe that Excellence is a culture and we are committed to a
          philosophy of consistent Improvement in everything we do, we are
          Passionate and Candid we trust in the power of Collaboration.
        </div>
        <div>
          <div className="pastfloate13">
            <img src={groupseven} alt="" className="pastfloate5" />
          </div>
          <div>
            <img src={eclipse} alt="" className="pastfloate0" />
          </div>
          <div>
            <img src={together} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Past;
