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
      <header className="pwow">
        <Cardnavbar />
      </header>

      <nav className="pdchild">
        <button className="startpersonal" onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} className="farrowleft" />
        </button>
      </nav>

      <section className="productdesignersinfomation">
        <figure>
          <img src={pdway} alt="Quality Assurance Pathway" />
        </figure>
        <div className="productdesignersinfomation1">
          <h2 className="abtpathwayspd">About this pathway</h2>
          <article className="propddesigns">
            <h3>Quality Assurance (QA)</h3>
            <p>
              Quality Assurance (QA) ensures that products and services meet
              specified requirements and standards before they reach the
              customer. This field focuses on systematic processes to test and
              validate product functionality, reliability, and performance. QA
              professionals use manual and automated testing methods, employing
              tools like Selenium, JUnit, and Jenkins, to identify defects and
              ensure that the final product is of high quality. They work
              closely with developers and product teams to create and implement
              effective testing strategies.
            </p>
          </article>
          <article className="propddesigns">
            <p>
              Product designers collaborate closely with cross-functional teams,
              from developers to marketers, to create innovative and
              user-friendly products. In essence, product design is about
              solving problems, empathizing with users, and translating their
              needs into elegant, intuitive, and visually appealing solutions.
            </p>
          </article>
        </div>
      </section>

      <section className="pdchildsecond" id="pdchildsecondnew">
        <div className="learn-section">
          <h2 className="wylearn">What you'll learn</h2>
          <ul className="dottedwyl" id="widthlearn">
            <li className="li-section">
              Manual Testing: Learn the fundamentals of manual testing and
              various testing techniques.
            </li>
            <li className="li-section">
              Automated Testing: Gain proficiency in automated testing tools
              like Selenium and JUnit.
            </li>
            <li className="li-section">
              Testing Frameworks: Understand different testing frameworks and
              methodologies.
            </li>
            <li className="li-section">
              Bug Tracking and Reporting: Learn to use bug tracking tools like
              JIRA to report and manage defects.
            </li>
            <li className="li-section">
              Quality Assurance Processes: Master the QA lifecycle and processes
              to ensure product quality.
            </li>
          </ul>
        </div>

        <div className="requirements-section">
          <h2 className="wylearn">Requirements</h2>
          <ul className="dottedwyl">
            <li className="li-section">A fully functional laptop</li>
            <li className="li-section">A working mobile phone</li>
            <li className="li-section">A learning attitude</li>
            <li className="li-section">A desire to achieve excellence</li>
          </ul>
        </div>
      </section>

      <section className="curriculumwrapperptn">
        <div className="currydesign">
          <img src={design} alt="Curriculum Design" />
        </div>
        <header className="curryheaders">
          <h2 className="currycuryy">Curriculum</h2>
          <p>
            This program is designed to provide you with in-depth knowledge on
            the following:
          </p>
        </header>

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
                <li className="deccurry" id="newnndecurry">
                  Test strategy, planning, and management
                </li>
                <li className="deccurry" id="newnndecurry">
                  Test execution processes
                </li>
                <li className="deccurry" id="newnndecurry">
                  Test reporting and metrics in Agile projects
                </li>
                <li className="deccurry" id="newnndecurry">
                  Test management tools and practices
                </li>
              </ul>
            </div>

            <div>
              <ul className="currydec">
                <li className="deccurry" id="newnndecurry">
                  Non-functional Testing
                </li>
                <li className="deccurry" id="newnndecurry">
                  Introduction to test automation
                </li>
                <li className="deccurry" id="newnndecurry">
                  Test Execution and Reporting with Test Management Tool
                </li>
                <li className="deccurry" id="newnndecurry">
                  Approaches to Automation
                </li>
                <li className="deccurry" id="newnndecurry">
                  Continuous integration and continuous testing
                </li>
                <li className="deccurry" id="newnndecurry">
                  Practical project work applying software testing principles
                </li>
              </ul>
            </div>

            <figure className="curriculum-image">
              <img src={pddesigns} alt="" />
            </figure>
          </div>
        </div>
      </section>

      <aside className="otherpathwayspds">
        <h2>Other Learning Pathways</h2>

        <div className="calledimportescards">
          {/* Assuming these components render cards for different pathways */}
          <DataAnalysis />
          <Productdesigncards />
          <BackEndCards />
        </div>
      </aside>

      {/* Footer Section */}
      <footer className="calledimportescards2">
        <Footer />
      </footer>
    </div>
  );
};

export default Qualityassuranceinfo;
