import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainView from "./views/MainView";

import "./index.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
