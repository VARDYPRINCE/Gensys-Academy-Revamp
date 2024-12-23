import "../landingstyles/landingpage.css";
import prince from "../../assets/images/2713.png";
import vector from "../../assets/images/Vector.png";

const Who = () => {
  return (
    <div className="who_wrapper">
      <div className="whoimage2">
        <img src={prince} alt="" className="prince" />
      </div>
      <div className="whotxtwrapper">
        <div className="whotxt">Who We Are</div>
        <div className="whotxt1">
          Genesys Academy is a Software Development Institute with certified
          experts as trainers, a well-structured curriculum and a world-class
          learning environment to give students an exceptional
          learning experience.
        </div>{" "}
        <br />
        <div className="whotxt2">
          We primarily educate and groom software developers and designers,
          preparing them for the industry.
        </div>
      </div>
      <div className="vectorwhoweare">
        <img src={vector} alt="" className="vct" />
      </div>
    </div>
  );
};

export default Who;
