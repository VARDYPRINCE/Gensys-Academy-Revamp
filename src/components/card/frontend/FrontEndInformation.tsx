import Cardnavbar from "../cardnavbar/Cardnavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../productdesign/productdesigninfo.css";
import pdway from "../../../assets/images/Pathway Logo (2).png";
import design from "../../../assets/images/Designq.png";
import pddesigns from "../../../assets/images/Pathway Logo (10).png";
import DataAnalysis from "../dataanalysis/DataAnalysis";
import QualityAssurance from "../qualityassurance/QualityAssurance";
import Footer from "../../footer/Footer";
import Productdesigncards from "../productdesign/Productdesigncards";
import { useNavigate } from "react-router-dom";

const FrontEndInformation = () => {

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
            <span className="propddesigns2">Frontend Development (FE)</span>{" "}
            involves the process of creating and implementing the User Interface
            (UI) and User Experience (UX) for online and mobile apps is referred
            to as Frontend Development. This area of development is concerned
            with producing aesthetically beautiful, engaging, and user-friendly
            designs that meet end-user requirements. To create user-friendly and
            captivating interfaces, Frontend Developers will use frameworks and
            libraries like React together with programming languages like HTML,
            CSS, and JavaScript. To achieve smooth interaction between the user
            interface and the underlying application logic, these developers
            collaborate closely with Product Designers and Backend Developers.
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
            <li className="li-section">Introduction to Programming</li>
            <li className="li-section">
              HTML, CSS, JavaScript: You'll master the fundamental building
              blocks of web development
            </li>
            <li className="li-section">
              Responsive Design: Learn to create web applications that adapt to
              various screen sizes and devices.
            </li>
            <li className="li-section">
              UI Frameworks: Explore popular frameworks like React, Angular, or
              Vue for efficient front-end development.
            </li>
            <li className="li-section">
              User Experience (UX): Understand how to design user-friendly
              interfaces for a great user experience.
            </li>
            <li className="li-section">
              Web Performance: Optimise web applications for speed and
              responsiveness
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
                <li className="deccurry">Introduction to Programming</li>
                <li className="deccurry">
                  User Data, User Research and Personas
                </li>
                <li className="deccurry">Git & Version Control</li>
                <li className="deccurry">JavaScript Fundamentals</li>
                <li className="deccurry">
                  Data structures - Arrays and Objects
                </li>
              </ul>
            </div>
            <div>
              <ul className="currydec">
                <li className="deccurry">HTML & CSS Fundamentals</li>
                <li className="deccurry">Advanced HTML & CSS</li>
                <li className="deccurry">JavaScript Design Patterns</li>
                <li className="deccurry">Blockchain/Web3</li>
                <li className="deccurry">Developing Web Apps with React</li>
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
          <Productdesigncards />
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

export default FrontEndInformation;
