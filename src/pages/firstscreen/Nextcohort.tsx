import "../landingstyles/landingpage.css";
import sirpaul from "../../assets/images/_MG_0929 2.png";
const Nextcohort = () => {
  return (
    <div className="cohortwrapper">
      <div>
        <div className="jtnc">Join The Next Cohort</div>
      </div>

      <div className="gridcohort">
        <div>
          <img src={sirpaul} alt="" />
        </div>
        <div className="gridcohort2">
          <div className="applyon">Apply Online</div> <br />
          <div className="appltxt">
            Complete the application process by filling the forms, follow the
            steps required of you in order for you to secure a spot for the next
            cohort. After a successful application online, your Tech journey can
            Begin.
          </div> <br />
          <div>
            <button className="btncohortwrapper">Apply Now</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Nextcohort;
