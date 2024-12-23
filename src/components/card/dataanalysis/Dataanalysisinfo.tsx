import Cardnavbar from "../cardnavbar/Cardnavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../productdesign/productdesigninfo.css";
import pdway from "../../../assets/images/Pathway Logo (14).png";
import design from "../../../assets/images/Designq.png";
import pddesigns from "../../../assets/images/Pathway Logo (13).png";
import QualityAssurance from "../qualityassurance/QualityAssurance";
import Footer from "../../footer/Footer";
import Productdesigncards from "../productdesign/Productdesigncards";
import BackEndCards from "../backendcarddata/BackEndCards";
import { useNavigate } from "react-router-dom";

const Dataanalysisinfo = () => {

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
            <span className="propddesigns2">Data Analysis (DA)</span>
            involves examining, cleaning, transforming, and modeling data to
            discover useful information, draw conclusions, and support
            decision-making. This field focuses on applying statistical and
            computational techniques to large datasets to identify patterns,
            trends, and relationships. Data Analysts use tools such as Python,
            R, SQL, and Excel, along with visualization tools like Tableau and
            Power BI, to analyze data effectively. They work closely with
            stakeholders across various departments to provide insights that
            drive business strategies and improve performance
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
      <div className="pdchildsecond" id="datanewbgcolor">
        <div className="learn-section">
          <h2 className="wylearn">What you'll learn</h2>
          <ul className="dottedwyl" id="widthlearn">
            <li className="li-section">
            Data Cleaning and Preprocessing: Learn techniques to clean and prepare data for analysis.
            </li>
            <li className="li-section">
            Statistical Analysis: Understand the principles of statistical analysis to interpret data accurately.
            </li>
            <li className="li-section">
            Data Visualization: Master tools like Tableau and Power BI to create compelling data visualizations.
            </li>
            <li className="li-section">
            Programming for Data Analysis: Gain proficiency in Python for data manipulation and analysis.
            </li>
            <li className="li-section">
            SQL for Data Management: Learn to query and manage databases using SQL.
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
                Introduction to Data Analysis
                </li>
                <li className="deccurry">
                Gathering Data
                </li>
                <li className="deccurry">Intermediate Excel: Formulas, Functions</li>
              </ul>
            </div>
            <div>
              <ul className="currydec">
                <li className="deccurry">Advanced Excel: Conditional Formatting, VLOOKUP, XLOOKU</li>
                <li className="deccurry">Introduction to SQL; MSSQL</li>
                <li className="deccurry">Business Intelligence Tools; Power BI and Tableau</li>
                <li className="deccurry">Data Analysis with R programming</li>
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
          <QualityAssurance />
          <BackEndCards />
        </div>
      </div>
      <div className="calledimportescards2">
        <Footer />
      </div>
    </div>
  );
};

export default Dataanalysisinfo;
