import Cardnavbar from "../cardnavbar/Cardnavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../productdesign/productdesigninfo.css";
import pdway from "../../../assets/images/PD Pathway.png";
import design from "../../../assets/images/Designq.png";
import pddesigns from "../../../assets/images/Pd Logo.png";
import FrontEndCards from "../frontend/FrontEndCards";
import DataAnalysis from "../dataanalysis/DataAnalysis";
import QualityAssurance from "../qualityassurance/QualityAssurance";
import Footer from "../../footer/Footer";
import { useNavigate } from "react-router-dom";

const Productdesigninfo = () => {
  const navigate = useNavigate(); 

  const handleBackClick = () => 
    navigate(-1);
  return (
    <div className="productdesigninfowrapper">
      <div className="pwow">
        <Cardnavbar />
      </div>
      <div className="pdchild">
        <button className="startpersonal"  onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} className="farrowleft" />
        </button>
      </div>

      <div className="productdesignersinfomation">
        <div>
          <img src={pdway} alt="" />
        </div>
        <div className="productdesignersinfomation1">
          <div className="abtpathwayspd">About this pathway</div>
          <div className="propddesigns">
            <span className="propddesigns2">Product Design (PD)</span> is the
            process of creating and developing a physical or digital product
            from concept to completion ensuring they meet the users goals and
            business goals. This track encompasses a wide range of skills,
            including user research, user interface (UI) design, interaction
            design, prototyping, and usability testing.
          </div>
          <div className="propddesigns">
            Product designers collaborate closely with cross-functional teams,
            from developers to marketers, to create innovative and user-friendly
            products. In essence, product design is about solving problems,
            empathizing with users, and translating their needs into elegant,
            intuitive, and visually appealing solutions.
          </div>
        </div>
      </div>
      <div className="pdchildsecond">
        <div className="learn-section">
          <h2 className="wylearn">What you'll learn</h2>
          <ul className="dottedwyl" id="widthlearn">
            <li className="li-section">
              Principles of Designs and Introduction to Figma.
            </li>
            <li className="li-section">
              User Research: Develop skills to understand and empathize with
              user needs and behaviors.
            </li>
            <li className="li-section">
              UI/UX Design: Create visually appealing, user-friendly interfaces
              through wireframing and prototyping.
            </li>
            <li className="li-section">
              Design Thinking: Employ a problem-solving methodology to craft
              innovative and user-centered solutions.
            </li>
            <li className="li-section">
              Usability Testing: Learn how to test and refine designs based on
              user feedback.
            </li>
            <li className="li-section">
              Collaboration: Work effectively with cross-functional teams to
              turn design concepts into real products.
            </li>
          </ul>
        </div>

        <div className="requirements-section">
          <h2 className="wylearn">Requirements</h2>
          <ul className="dottedwyl">
            <li className="li-section">A fully functional laptop</li>
            <li className="li-section">A working mobile phone</li>
            <li className="li-section">A learning attitude; and</li>
            <li className="li-section">A desire to achieve excellence</li>
          </ul>
        </div>
      </div>

      <div className="curriculumwrapperptn">
        <div className="currydesign">
          <img src={design} alt="" />
        </div>
        <div className="curryheaders">
          <div className="currycuryy">Curriculum</div>
          <div className="currycuryy2">
            This program is designed to provide you with in-depth knowledge on
            the following:
          </div>
        </div>
        <div className="curryinfos">
          <div className="curriculum-section">
            <div className="curriculum-lists">
              <ul className="currydec">
                <li className="deccurry">
                  Principles of Design and Introduction to Figma
                </li>
                <li className="deccurry">
                  User Data, User Research and Personas
                </li>
                <li className="deccurry">Ideation</li>
                <li className="deccurry">Usability Testing and Evaluation</li>
                <li className="deccurry">UI Design Elements and Components</li>
              </ul>
            </div>
            <div>
              <ul className="currydec">
                <li className="deccurry">UI Design Patterns</li>
                <li className="deccurry">Branding and UI</li>
                <li className="deccurry">Design Systems</li>
                <li className="deccurry">Blockchain/Web3</li>
                <li className="deccurry">
                  Multi Device Design and Responsive Design
                </li>
              </ul>
            </div>
            <div className="curriculum-image">
              <div className="circle-design">
                <img src={pddesigns} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="otherpathwayspds">
        <div className="otherpathwayspds1">Others Learning Pathways</div>

        <div className="calledimportescards">
          <FrontEndCards />
          <DataAnalysis />
          <QualityAssurance />
        </div>
      </div>
      <div className="calledimportescards2">
        <Footer />
      </div>
    </div>
  );
};

export default Productdesigninfo;
