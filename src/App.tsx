import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLanding from "./pages/firstscreen/MainLanding";
import Layoutforlanding from "./pages/firstscreen/Layoutforlanding";
import ContactUs from "./pages/firstscreen/ContactUs";
import Faqs from "./components/faq/Faqs";
import Personaldata from "./pages/secondscreen/Personaldata";
import Productdesigninfo from "./components/card/productdesign/Productdesigninfo";
import FrontEndinformation from "./components/card/frontend/FrontEndInformation";
import Qualityassuranceinfo from "./components/card/qualityassurance/Qualityassuranceinfo";
import Dataanalysisinfo from "./components/card/dataanalysis/Dataanalysisinfo";
import Backendinfo from "./components/card/backendcarddata/Backendinfo";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLanding />} />

          <Route path="/productdesign" element={<Productdesigninfo />} />
          <Route path="/frontend" element={<FrontEndinformation />} />
          <Route path="/qa" element={<Qualityassuranceinfo />} />
          <Route path="/dataanlysis" element={<Dataanalysisinfo />} />
          <Route path="/backend" element={<Backendinfo />} />

          <Route path="/personaldata" element={<Personaldata />} />

          <Route path="/" element={<Layoutforlanding />}>
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/faqs" element={<Faqs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
