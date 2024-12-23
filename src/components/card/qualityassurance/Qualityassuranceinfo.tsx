import Cardnavbar from "../cardnavbar/Cardnavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../productdesign/productdesigninfo.css";
import pdway from "../../../assets/images/Pathway Logo (15).png";
import design from "../../../assets/images/Designq.png";
import pddesigns from "../../../assets/images/Pathway Logo (16).png";
import DataAnalysis from "../dataanalysis/DataAnalysis";
import Footer from "../../footer/Footer";
import Productdesigncards from "../productdesign/Productdesigncards";
import BackEndCards from "../backendcarddata/BackEndCards";
import { useNavigate } from "react-router-dom";

const Qualityassuranceinfo = () => {

    const navigate = useNavigate(); 

    const handleBackClick = () => {
      navigate(-1); 
    };
  
  return (
    <div className="productdesigninfowrapper">
      <div className="pwow">
        <Cardnavbar />
      </div>
      <div className="pdchild">
        <button className="startpersonal" onClick={handleBackClick}>
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
            <span className="propddesigns2">Quality Assurance (QA)</span>
            ensures that products and services meet specified requirements and
            standards before they reach the customer. This field focuses on
            systematic processes to test and validate product functionality,
            reliability, and performance. QA professionals use manual and
            automated testing methods, employing tools like Selenium, JUnit, and
            Jenkins, to identify defects and ensure that the final product is of
            high quality. They work closely with developers and product teams to
            create and implement effective testing strategies.
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
      <div className="pdchildsecond" id="pdchildsecondnew">
        <div className="learn-section">
          <h2 className="wylearn">What you'll learn</h2>
          <ul className="dottedwyl" id="widthlearn">
            <li className="li-section">
            Manual Testing: Learn the fundamentals of manual testing and various testing techniques.
            </li>
            <li className="li-section">
            Automated Testing: Gain proficiency in automated testing tools like Selenium and JUnit.
            </li>
            <li className="li-section">
            Testing Frameworks: Understand different testing frameworks and methodologies
            </li>
            <li className="li-section">
            Bug Tracking and Reporting: Learn to use bug tracking tools like JIRA to report and manage defects.
            </li>
            <li className="li-section">
            Quality Assurance Processes: Master the QA lifecycle and processes to ensure product quality.
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
                <li className="deccurry" id="newnndecurry">
                Introduction to Software Testing
                </li>
                <li className="deccurry" id="newnndecurry">
                Testing objectives and principles
                </li>
                <li className="deccurry" id="newnndecurry">Test strategy, planning and Management</li>
                <li className="deccurry" id="newnndecurry">Test execution processes</li>
                <li className="deccurry" id="newnndecurry">Test reporting and metrics in Agile projects</li>
                <li className="deccurry" id="newnndecurry">Test management tools and practices</li>
              </ul>
            </div>
            <div>
              <ul className="currydec">
                <li className="deccurry" id="newnndecurry">Non-functional Testing</li>
                <li className="deccurry" id="newnndecurry">Introduction to test automation</li>
                <li className="deccurry" id="newnndecurry">Test Execution and Reporting with Test Management Tool</li>
                <li className="deccurry" id="newnndecurry">Approaches to Automation</li>
                <li className="deccurry" id="newnndecurry">
                Continuous integration and continuous testing
                </li>
                <li className="deccurry" id="newnndecurry">
                Practical project work applying software testing principles
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
          <DataAnalysis />
          <Productdesigncards />
          <BackEndCards />
        </div>
      </div>
      <div className="calledimportescards2">
        <Footer />
      </div>
    </div>
  );
};

export default Qualityassuranceinfo;
