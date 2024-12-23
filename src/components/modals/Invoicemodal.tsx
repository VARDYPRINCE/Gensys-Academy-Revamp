import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import "./invoicemodal.css";
import Accountmodal from "./Accountmodal"; 

const Invoicemodal = ({ onClose }: { onClose: () => void }) => {
  const [showAccountModal, setShowAccountModal] = useState(false); 

  const handleAccountDetailsClick = () => {
    setShowAccountModal(true);
  };

  return (
    <>
      {showAccountModal ? (
   
        <Accountmodal />
      ) : (
      
        <div className="invoice-background">
          <div className="invoicewrapper">
            <div className="invoice-text">
              <h3 className="payinv1">Payment Invoice</h3>
              <IoIosCloseCircleOutline className="closer" onClick={onClose} /> {/* Close button */}
            </div>
            <div className="subhead">
              To validate and confirm your offline payment, kindly upload the bank receipt.
            </div>

            <div className="display-invoice">
              <div className="invoice-texts">
                <MdOutlineContentCopy className="copy" />
                <div>
                  <h4 className="invnotsame">60% First Installment Invoice Code</h4>
                  <div className="invnotsame2">aSfDuebTUDKyxYz</div>
                </div>
              </div>

              <div className="invoice">
                <MdOutlineContentCopy className="copy" />
                <div>
                  <h4 className="invnotsame">Full Payment Invoice Code</h4>
                  <div className="invnotsame2">aSfDuebTUDKyxYz</div>
                </div>
              </div>
            </div>

          
            <button className="dyn-btn" onClick={handleAccountDetailsClick}>
              Get Account Details
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Invoicemodal;
