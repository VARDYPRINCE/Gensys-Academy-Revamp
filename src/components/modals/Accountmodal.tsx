import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./accountmodal.css";

const Accountmodal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); 
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    navigate("/"); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  if (!isModalOpen) {
    return null; 
  }

  return (
    <div className="acctnumber">
      <div className="account-background">
        <div className="account-head">
          <h3>Account Details</h3>
          <IoIosCloseCircleOutline
            className="closer"
            onClick={handleCloseModal}
          />{" "}
        </div>

        <div className="account-text">
          <h4>Account Name</h4>
          <p>Hubly LTD</p>

          <h4>Account Number</h4>
          <p>1228322121</p>

          <h4>Bank Name</h4>
          <p>Zenith Bank PLC</p>

          <div className="homepagebtnacct">
            <button className="dyn-button" onClick={handleHomePageClick}>
              Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountmodal;
