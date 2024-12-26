import { useState } from "react";
import "../landingstyles/landingpage.css";
import Navbar from "../../components/navbar/Navbar";
import group3 from "../../assets/images/Group 3.png";
import eclipse from "../../assets/images/Ellipse 5.png";
import oj from "../../assets/images/2653 1.png";
import bella from "../../assets/images/_MG_1481_1 1.png";
import group10 from "../../assets/images/Group 10.png";
import Mrcharles from "../../assets/images/_MG_0870 1.png";
import progress from "../../assets/images/2709 1.png";
import group6 from "../../assets/images/Group 6.png";
import { Link } from "react-router-dom";
import OfflineModal from "../../components/modals/OfflineModal";

const Landingpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      <main className="landingptn">
        <section className="landingptn1">
          <h1 className="landingptntheader">
            Get Skilled To Excel, Begin Your Tech Journey.
          </h1>
          <p className="landingptnttxt">
            Interested in getting comprehensive, hands-on training in software
            development career? Then Genesys Academy is your best bet to gain
            the skills you need to excel!
          </p>
          <div className="landingbtn">
            <Link to="/personaldata">
              <button className="landingbtn-1">Begin Application</button>
            </Link>
            <button className="landingbtn-2" onClick={openModal}>
              Validate Offline Payment
            </button>
          </div>
          <figure>
            <img src={group3} alt="Group illustration" className="group3" />
          </figure>
        </section>

        <section className="landingptn2">
          <div className="eclipse">
            <figure>
              <img src={eclipse} alt="Eclipse graphic" className="eclipse" />
            </figure>
          </div>
          <div>
            <figure>
              <img src={oj} alt="OJ graphic" className="oj" />
            </figure>
          </div>
          <div>
            <figure>
              <img src={bella} alt="Bella graphic" className="bella" />
            </figure>
          </div>
          <div className="group10">
            <figure>
              <img src={group10} alt="Group 10 graphic" className="group10" />
            </figure>
          </div>
          <div>
            <figure>
              <img
                src={Mrcharles}
                alt="Mr. Charles graphic"
                className="mrcharles"
              />
            </figure>
          </div>
          <div>
            <figure>
              <img src={progress} alt="Progress graphic" className="progress" />
            </figure>
          </div>
          <div className="group6">
            <figure>
              <img src={group6} alt="Group 6 graphic" className="group6" />
            </figure>
          </div>
        </section>

        {isModalOpen && <OfflineModal closeModal={closeModal} />}
      </main>
    </>
  );
};

export default Landingpage;
