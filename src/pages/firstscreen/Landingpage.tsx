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
    <div className="landingPagewrapper">
      <div className="imported">
        <Navbar />
      </div>

      <div className="landingptn">
        <div className="landingptn1">
          <h1 className="landingptntheader">
            Get Skilled To Excel, Begin Your Tech Journey.
          </h1>
          <div className="landingptnttxt">
            Interested in getting comprehensive, hands-on-training in software
            development career? Then Genesys Academy is your best bet to gain
            the skills you need to excel!
          </div>
          <br />
          <div className="landingbtn">
            <Link to="/personaldata">
              <button className="landingbtn-1">Begin Application</button>
            </Link>
            <button className="landingbtn-2" onClick={openModal}>Validate Offline Payment</button>
          </div>
          <div>
            <img src={group3} alt="" className="group3" />
          </div>
        </div>

        <div className="landingptn2">
          <div className="eclipse">
            <img src={eclipse} alt="" className="eclipse" />
          </div>
          <div>
            <img src={oj} alt="" className="oj" />
          </div>
          <div>
            <img src={bella} alt="" className="bella" />
          </div>
          <div className="group10">
            <img src={group10} alt="" className="group10" />
          </div>
          <div>
            <img src={Mrcharles} alt="" className="mrcharles" />
          </div>
          <div>
            <img src={progress} alt="" className="progress" />
          </div>
          <div className="group6">
            <img src={group6} alt="" className="group6" />
          </div>
        </div>
      </div>

      {isModalOpen && <OfflineModal closeModal={closeModal} />}
    </div>
  );
};

export default Landingpage;
