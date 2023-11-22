import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComeWebView from "./components/views/ComeWebView";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ComeWeb" element={<ComeWebView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
