import "../landingstyles/landingpage.css";
import gcpic1 from "../../assets/images/_MG_4256 1.png";
import groupseven from "../../assets/images/Group 7.png";
import eclipse from "../../assets/images/Ellipse 6.png";
import together from "../../assets/images/_MG_1398 2.png";
const Past = () => {
  return (
    <section className="pastwrapper">
      <h2 className="pastit">Meet Our Past Interns</h2>

      <div className="pastptn1">
        <figure>
          <img src={gcpic1} alt="Past intern profile" />
        </figure>
        <div>
          <figure className="pastfloate1">
            <img
              src={groupseven}
              alt="Group of past interns"
              className="pastfloate1"
            />
          </figure>
          <p className="pasttxext">
            We believe that excellence is a culture and we are committed to a
            philosophy of consistent improvement in everything we do. We are
            passionate and candid; we trust in the power of collaboration.
          </p>
          <figure>
            <img src={eclipse} alt="Eclipse graphic" className="pastfloate2" />
          </figure>
        </div>
      </div>

      <div className="pastptn1">
        <p className="pasttxext">
          We believe that every problem has a solution and we are committed to a
          live of constant research to help people and business reach their
          maximum potential, one step at a time.
        </p>
        <div>
          <figure className="pastfloate13">
            <img
              src={groupseven}
              alt="Group of past interns"
              className="pastfloate5"
            />
          </figure>
          <figure>
            <img src={eclipse} alt="Eclipse graphic" className="pastfloate0" />
          </figure>
          <figure>
            <img src={together} alt="Together graphic" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Past;
