import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComeWebView from "./components/views/ComeWebView";
import AboutUsView from "./components/views/AboutUsView";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ComeWeb" element={<ComeWebView />} />
        <Route path="/AboutUs" element={<AboutUsView/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
