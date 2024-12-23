import { IoIosCloseCircleOutline } from "react-icons/io";
import "./offlinemodal.css";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useEffect } from "react";

interface OfflineModalProps {
  closeModal: () => void; 
}

const OfflineModal = ({ closeModal }: OfflineModalProps) => {
 
  useEffect(() => {
   
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="pay-background">
        <div className="payment-details">
          <div className="pay-text-payment">
            <div className="pay-text">
              <h3 className="cpmodalheader">Confirm Payment</h3>
              {/* Close button */}
              <IoIosCloseCircleOutline
                className="closer"
                onClick={closeModal}
              />
            </div>
            <div className="subhead">
              To validate and confirm your offline payment, kindly upload the
              bank receipt.
            </div>
          </div>

          <div className="pay-fields">
            <form action="" className="forms">
              <label htmlFor="" className="labelupdated">Payment Invoice</label>
              <br />
              <input
                type="text"
                id="invoice"
                name="invoice"
                placeholder="Enter Payment Invoice"
                className="inputss"
              />
              <br />
              <div className="email">
                <label htmlFor=""  className="labelupdated">Email Address</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="inputss"
                />
              </div>
              <div className="receipt">
                <label htmlFor=""  className="labelupdated">Payment Receipt</label>
                <div className="choose">
                  <IoCloudUploadOutline className="cloud" />
                  <p>
                    <span>Drag and drop your file</span>
                    <br />
                    (png, jpg, jpeg, and pdf) <br />
                    Maximum Size: 5MB
                  </p>
                  <input type="file" className="file" />
                </div>
              </div>
            </form>

            <div className="dynamicbtn">
              <button className="dynamic-btn">Submit Payment Receipt</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfflineModal;
