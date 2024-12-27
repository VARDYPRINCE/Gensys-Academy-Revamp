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

  const handleBackClick = () => navigate(-1);
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
          <img src={pdway} alt="Pathway Illustration" />
        </figure>
        <div className="productdesignersinfomation1">
          <h2 className="abtpathwayspd">About this pathway</h2>
          <article className="propddesigns">
            <h3>Data Analysis (DA)</h3>
            <p>
              Data Analysis (DA) involves examining, cleaning, transforming, and
              modeling data to discover useful information, draw conclusions,
              and support decision-making. This field focuses on applying
              statistical and computational techniques to large datasets to
              identify patterns, trends, and relationships. Data Analysts use
              tools such as Python, R, SQL, and Excel, along with visualization
              tools like Tableau and Power BI, to analyze data effectively. They
              work closely with stakeholders across various departments to
              provide insights that drive business strategies and improve
              performance.
            </p>
          </article>
          <article className="propddesigns">
            <h3>Product Design</h3>
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

      <section className="pdchildsecond" id="datanewbgcolor">
        <div className="learn-section">
          <h2 className="wylearn">What you'll learn</h2>
          <ul className="dottedwyl" id="widthlearn">
            <li className="li-section">
              Data Cleaning and Preprocessing: Learn techniques to clean and
              prepare data for analysis.
            </li>
            <li className="li-section">
              Statistical Analysis: Understand the principles of statistical
              analysis to interpret data accurately.
            </li>
            <li className="li-section">
              Data Visualization: Master tools like Tableau and Power BI to
              create compelling data visualizations.
            </li>
            <li className="li-section">
              Programming for Data Analysis: Gain proficiency in Python for data
              manipulation and analysis.
            </li>
            <li className="li-section">
              SQL for Data Management: Learn to query and manage databases using
              SQL.
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
                <li className="deccurry">Introduction to Data Analysis</li>
                <li className="deccurry">Gathering Data</li>
                <li className="deccurry">
                  Intermediate Excel: Formulas, Functions
                </li>
              </ul>
            </div>

            <div>
              <ul className="currydec">
                <li className="deccurry">
                  Advanced Excel: Conditional Formatting, VLOOKUP, XLOOKUP
                </li>
                <li className="deccurry">Introduction to SQL; MSSQL</li>
                <li className="deccurry">
                  Business Intelligence Tools; Power BI and Tableau
                </li>
                <li className="deccurry">Data Analysis with R programming</li>
              </ul>
            </div>

            <figure className="curriculum-image">
              <img src={pddesigns} alt="Curriculum Designs" />
            </figure>
          </div>
        </div>
      </section>

      <section className="otherpathwayspds">
        <h2>Other Learning Pathways</h2>

        <div className="calledimportescards">
          <Productdesigncards />
          <QualityAssurance />
          <BackEndCards />
        </div>
      </section>

      <footer className="calledimportescards2">
        <Footer />
      </footer>
    </div>
  );
};

export default Dataanalysisinfo;
