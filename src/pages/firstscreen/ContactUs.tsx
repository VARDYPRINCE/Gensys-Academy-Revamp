import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../landingstyles/landingpage.css";
import locationcsu from "../../assets/images/Infographics.png";
import phone from "../../assets/images/Infographics (1).png";
import mail from "../../assets/images/Infographics (2).png";
import time from "../../assets/images/Infographics (3).png";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Chisom Backend Api
  };

  return (
    <div className="contact-container1">
      <div className="form-section">
        <h2 className="csh2">Let's hear from you!</h2>
        <div className="pcusa">
          Do you have any questions or in need of assistance? Reach out to our
          committed support team. We value your feedback and inquiry. We are
          just a click or call away and ready to help.
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName" className="fncu">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              required
              className="cuipbox"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="fncu">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              required
              className="cuipbox"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="fncu">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type in your message"
              required
              className="cstextarea"
            />
          </div>

          <button type="submit" className="submit-btn">
            Send <FontAwesomeIcon icon={faArrowRight} className="arrowicon" />
          </button>
        </form>
      </div>

      <div className="contact-details">
        <div className="ptnlocation1">
          <div>
            <img src={locationcsu} alt="" />
          </div>
          <div>
            <div className="loacte">Location</div>
            <div className="kilometer">
              Kilometer 7, Enugu/Port Harcourt Expressway, Centenary City,
              Enugu, Nigeria.
            </div>
          </div>
        </div>
        <div className="ptnlocation1">
          <div>
            <img src={phone} alt="" />
          </div>
          <div>
            <div className="loacte">Phone</div>
            <div className="kilometer">+234 814 012 0539</div>
          </div>
        </div>
        <div className="ptnlocation1">
          <div>
            <img src={mail} alt="" />
          </div>
          <div>
            <div className="loacte">Mail</div>
            <div className="kilometer">academy@genesystechhub.com</div>
          </div>
        </div>
        <div className="ptnlocation1">
          <div>
            <img src={time} alt="" />
          </div>
          <div className="bhours">
            <div className="loacte">Buisness Hours</div>
            <div className="retry_ptn">
              <div className="bhtxt">Monday-Friday</div>
              <div className="firstContactline"></div>
              <div className="bhending"> 8am - 5pm</div>
            </div>
            <br />
            <div className="retry_ptn">
              <div className="bhtxt">Saturday - Sunday</div>
              <div className="firstContactline"></div>
              <div className="bhending">closed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
