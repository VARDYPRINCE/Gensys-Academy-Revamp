import Cardnavbar from "../cardnavbar/Cardnavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../productdesign/productdesigninfo.css";
import pdway from "../../../assets/images/Pathway Logo (11).png";
import design from "../../../assets/images/Designq.png";
import pddesigns from "../../../assets/images/Pathway Logo (12).png";
import FrontEndCards from "../frontend/FrontEndCards";
import QualityAssurance from "../qualityassurance/QualityAssurance";
import Footer from "../../footer/Footer";
import Productdesigncards from "../productdesign/Productdesigncards";
import { useNavigate } from "react-router-dom";

const Backendinfo = () => {
  const navigate = useNavigate();

  const handleBackClick = () => navigate(-1);
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
            <span className="propddesigns2">Backend Development (BE)</span> in
            software engineering is the art of building and maintaining the
            server-side of applications. It involves mastering programming
            languages like Python or Node.js and database management with SQL or
            NoSQL databases. Backend developers focus on data storage,
            retrieval, API design, and ensuring application security and
            scalability. They work behind the scenes, making them essential for
            any software or web application's functionality and performance.
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
      <div className="pdchildsecond" id="newbebackcolor">
        <div className="learn-section">
          <h2 className="wylearn">What you'll learn</h2>
          <ul className="dottedwyl" id="widthlearn">
            <li className="li-section">
              Server-Side Programming: Dive into server-side technologies and
              languages like Node.js, Python, or Ruby
            </li>
            <li className="li-section">
              Databases: Learn how to work with databases, both SQL and NoSQL,
              for data management
            </li>
            <li className="li-section">
              API Development: Build RESTful APIs to enable communication
              between the front and back ends.
            </li>
            <li className="li-section">
              Security: Understand security practices and measures to protect
              data and applications
            </li>
            <li className="li-section">
              Scalability: Discover techniques for handling large-scale
              applications and optimising performance.
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
                <li className="deccurry" id="newdecurry">
                  Introduction to Programming
                </li>
                <li className="deccurry" id="newdecurry">
                  Git & Version Control
                </li>
                <li className="deccurry" id="newdecurry">
                  JavaScript Fundamentals
                </li>
                <li className="deccurry" id="newdecurry">
                  Object Oriented JavaScript
                </li>
              </ul>
            </div>
            <div>
              <ul className="currydec">
                <li className="deccurry" id="newdecurry">
                  Regular Expressions
                </li>
                <li className="deccurry" id="newdecurry">
                  JavaScript Design Patterns
                </li>
                <li className="deccurry" id="newdecurry">
                  Developing APIs with Node
                </li>
                <li className="deccurry" id="newdecurry">
                  Blockchain/Web3
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
          <QualityAssurance />
          <Productdesigncards />
        </div>
      </div>
      <div className="calledimportescards2">
        <Footer />
      </div>
    </div>
  );
};

export default Backendinfo;
