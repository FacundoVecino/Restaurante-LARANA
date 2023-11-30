import { BrowserRouter, Route, Routes } from "react-router-dom";

import MenuView from "./views/MenuView";

import "./index.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
