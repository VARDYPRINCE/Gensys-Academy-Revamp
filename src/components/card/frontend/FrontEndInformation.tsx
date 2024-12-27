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
          <img src={pdway} alt="Frontend Development Pathway" />
        </figure>
        <div className="productdesignersinfomation1">
          <h2 className="abtpathwayspd">About this pathway</h2>
          <article className="propddesigns">
            <h3>Frontend Development (FE)</h3>
            <p>
              Frontend Development involves the process of creating and
              implementing the User Interface (UI) and User Experience (UX) for
              online and mobile apps. This area of development focuses on
              producing aesthetically pleasing, engaging, and user-friendly
              designs that meet end-user requirements. Frontend Developers use
              frameworks and libraries like React along with programming
              languages such as HTML, CSS, and JavaScript to create
              user-friendly interfaces. They collaborate closely with Product
              Designers and Backend Developers to ensure smooth interaction
              between the user interface and the underlying application logic.
            </p>
          </article>
          <article className="propddesigns">
            <h3>Product Design Collaboration</h3>
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

      <section className="pdchildsecond">
        <div className="learn-section">
          <h2 className="wylearn">What you'll learn</h2>
          <ul className="dottedwyl" id="widthlearn">
            <li className="li-section">Introduction to Programming</li>
            <li className="li-section">
              HTML, CSS, JavaScript: Master the fundamental building blocks of
              web development.
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
              Web Performance: Optimize web applications for speed and
              responsiveness.
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
                <li className="deccurry">Introduction to Programming</li>
                <li className="deccurry">
                  User Data, User Research and Personas
                </li>
                <li className="deccurry">Git & Version Control</li>
                <li className="deccurry">JavaScript Fundamentals</li>
                <li className="deccurry">
                  Data Structures - Arrays and Objects
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

            <figure className="curriculum-image">
              <img src={pddesigns} alt="Curriculum Designs" />
            </figure>
          </div>
        </div>
      </section>

      <aside className="otherpathwayspds">
        <h2>Other Learning Pathways</h2>

        <div className="calledimportescards">
          {/* Assuming these components render cards for different pathways */}
          <Productdesigncards />
          <DataAnalysis />
          <QualityAssurance />
        </div>
      </aside>

      {/* Footer Section */}
      <footer className="calledimportescards2">
        <Footer />
      </footer>
    </div>
  );
};

export default FrontEndInformation;
