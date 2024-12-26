import "../landingstyles/landingpage.css";
import prince from "../../assets/images/2713.png";
import vector from "../../assets/images/Vector.png";

const Who = () => {
  return (
    <section className="who_wrapper">
      <figure className="whoimage2">
        <img src={prince} alt="Prince" className="prince" />
      </figure>
      <div className="whotxtwrapper">
        <h2 className="whotxt">Who We Are</h2>
        <p className="whotxt1">
          Genesys Academy is a Software Development Institute with certified
          experts as trainers, a well-structured curriculum, and a world-class
          learning environment to give students an exceptional learning
          experience.
        </p>
        <p className="whotxt2">
          We primarily educate and groom software developers and designers,
          preparing them for the industry.
        </p>
      </div>
      <figure className="vectorwhoweare">
        <img src={vector} alt="Vector graphic representing our mission" />
      </figure>
    </section>
  );
};

export default Who;
