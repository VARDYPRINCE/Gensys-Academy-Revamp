import BackEndCards from "../../components/card/backendcarddata/BackEndCards";
import DataAnalysis from "../../components/card/dataanalysis/DataAnalysis";
import FrontEndCards from "../../components/card/frontend/FrontEndCards";
import Productdesigncards from "../../components/card/productdesign/Productdesigncards";
import QualityAssurance from "../../components/card/qualityassurance/QualityAssurance";
import "../landingstyles/landingpage.css";

const Pathways = () => {
  return (
    <section className="pathwaywrapper">
      <div className="pathway">
        <h2 className="pathwayheader" id="pathways">
          Program Pathway
        </h2>
        <p className="pathwaytxt">
          This program is designed to provide you with in-depth knowledge in any
          of these pathways as we aim to equip you with the necessary skills to
          excel in the tech space.
        </p>
      </div>

      <div className="cardscalled">
        <article>
          <Productdesigncards />
        </article>
        <article>
          <FrontEndCards />
        </article>
        <article>
          <BackEndCards />
        </article>
      </div>

      <div className="testinfcards">
        <article>
          <DataAnalysis />
        </article>
        <article>
          <QualityAssurance />
        </article>
      </div>
    </section>
  );
};

export default Pathways;
