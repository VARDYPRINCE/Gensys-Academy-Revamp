import Navbar from "../../components/navbar/Navbar";
import wearegensys from "../../assets/images/image 2.png";
import "../landingstyles/landingpage.css";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Layoutforlanding = () => {
  return (
    <div className="layoutwrapper">
      <div className="importedcom">
        <Navbar />
      </div>
      <div className="wearegensys">
        <img src={wearegensys} alt="wearegensys" className="widthimg" />
      </div>
      <div className="layoutmaincontent">
        <Outlet />
      </div>
      <div className="importedcom">
        <Footer />
      </div>
    </div>
  );
};

export default Layoutforlanding;
