import "../landingstyles/landingpage.css";
import sirpaul from "../../assets/images/_MG_0929 2.png";
const Nextcohort = () => {
  return (
    <section className="cohortwrapper">
  <h2 className="jtnc">Join The Next Cohort</h2>

  <div className="gridcohort">
    <figure>
      <img src={sirpaul} alt="Sir Paul" />
    </figure>
    
    <div className="gridcohort2">
      <h3 className="applyon">Apply Online</h3>
      <p className="appltxt">
        Complete the application process by filling the forms, follow the
        steps required of you in order for you to secure a spot for the next
        cohort. After a successful application online, your tech journey can
        begin.
      </p>
      <div>
        <button className="btncohortwrapper">Apply Now</button>
      </div>
    </div>
  </div>
</section>

  );
};

export default Nextcohort;
