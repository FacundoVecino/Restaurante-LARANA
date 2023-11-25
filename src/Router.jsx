import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./component/Common/Navbar";
import Footer from "./component/Common/Footer";
import Error404 from "./component/View/Error404";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
