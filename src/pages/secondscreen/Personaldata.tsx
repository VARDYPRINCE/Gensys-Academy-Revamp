import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../landingstyles/seconscreen.css";
import { useState } from "react";
import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import infoeclipse from "../../assets/images/Ellipse 3.png";
import PaymentModal from "../../components/modals/PaymentModal";

interface FormData {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  address: string;
  learningPath: string;
  howDidYouHear: string;
}

const Personaldata = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    address: "",
    learningPath: "",
    howDidYouHear: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePageSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      mobileNumber,
      email,
      address,
      learningPath,
      howDidYouHear,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !mobileNumber ||
      !email ||
      !address ||
      !learningPath ||
      !howDidYouHear
    ) {
      setErrorMessage("Please fill in all fields before submitting.");
      return;
    }

    setErrorMessage("");

    setShowModal(true);
  };

  const handleBackButtonClick = () => {
    if (currentPage === 1) {
      window.location.href = "/"; // Return to the homepage
    } else if (currentPage === 2) {
      setCurrentPage(1); // Return to the first page
    }
  };

  const handlePaymentSuccess = () => {
    // After successful payment, show the confirmation page
    setCurrentPage(2);
    setShowModal(false); // Close the payment modal
  };

  return (
    <div className="personaldatawrapper">
      <div className="pagnition">
        <button className="startpersonal" onClick={handleBackButtonClick}>
          <FontAwesomeIcon icon={faArrowLeft} className="farrowleft" />
        </button>
        <div className="no_1">
          <h1 className="personaldatapd">Personal Data</h1>
          <hr className="horizontal" />
          <figure className={`pagnition1 ${currentPage === 1 ? "active" : ""}`}>
            <img src={one} alt="" className="pagnationjr1" />
          </figure>

          <figure className={`pagnition1 ${currentPage === 2 ? "active" : ""}`}>
            <img src={two} alt="" className="pagnationjr1" />
          </figure>
        </div>
      </div>

      {currentPage === 1 && (
        <div>
          <div className="pdpad">
            <div className="pdspaceinfo">
              <h2 className="pinfo">Personal Information</h2>
              <p className="aboutselfinfo">Tell us a little about yourself.</p>
            </div>
            <div className="formwrapper">
              <form onSubmit={handlePageSubmit} className="personal-data-form">
                <div>
                  <label className="pinfofn">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name"
                    className="selectinfo"
                  />
                </div>

                <div>
                  <label className="pinfofn">Mobile Number</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter Mobile Number"
                    className="selectinfo"
                  />
                </div>

                <div>
                  <label className="pinfofn">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
                    className="selectinfo"
                  />
                </div>

                <div>
                  <label className="pinfofn">
                    How did you hear about Genesys Academy?
                  </label>
                  <select
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleChange}
                    className="selectinfo"
                  >
                    <option value="">Select Option</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Youtube">Youtube</option>
                    <option value="Gensys Staff">Gensys Staff</option>
                    <option value="Family/Friend">Family/Friend</option>
                  </select>
                </div>
              </form>

              <form onSubmit={handlePageSubmit} className="personal-data-form">
                <div>
                  <label className="pinfofn">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name"
                    className="selectinfo"
                  />
                </div>
                <div>
                  <label className="pinfofn">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter Address"
                    className="selectinfo"
                  />
                </div>

                <div>
                  <label className="pinfofn">
                    What is your desired Learning Path?
                  </label>
                  <select
                    name="learningPath"
                    value={formData.learningPath}
                    onChange={handleChange}
                    className="selectinfo"
                  >
                    <option value="">Select Option</option>
                    <option value="Product Design">Product Design</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Data Analysis">Data Analysis</option>
                  </select>
                </div>

                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}

                <div className="btninformationsentence">
                  <button type="submit" className="btnsubmitinfo">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <img src={infoeclipse} alt="" />
          </div>
        </div>
      )}
      {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
      {currentPage === 2 && (
        <div>
          <h2>Payment Successful</h2>
          <p>Thank you for completing your payment!</p>
        </div>
      )}
    </div>
  );
};

export default Personaldata;
