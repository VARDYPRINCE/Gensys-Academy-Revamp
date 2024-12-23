import BackEndCards from "../../components/card/backendcarddata/BackEndCards";
import DataAnalysis from "../../components/card/dataanalysis/DataAnalysis";
import FrontEndCards from "../../components/card/frontend/FrontEndCards";
import Productdesigncards from "../../components/card/productdesign/Productdesigncards";
import QualityAssurance from "../../components/card/qualityassurance/QualityAssurance";
import "../landingstyles/landingpage.css";

const Pathways = () => {
  return (
    <div className="pathwaywrapper">
      <div className="pathway">
        <h2 className="pathwayheader" id="pathways">
          Program Pathway
        </h2>
        <div className="pathwaytxt">
          This program is designed to provide you with in-depth knowledge in any
          of these pathways as we aim to equip you with the necessary skills to
          excel in the tech space.
        </div>
      </div>{" "}
      <br />
      <div className="cardscalled">
        <Productdesigncards />
        <FrontEndCards />
        <BackEndCards />
      </div>{" "}
      <br /> <br />
      <div className="testinfcards">
        <DataAnalysis />
        <QualityAssurance />
      </div>
    </div>
  );
};

export default Pathways;
