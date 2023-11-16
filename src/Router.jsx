import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminView from "./views/AdminView.jsx";
import HomeView from "./views/HomeView.jsx";
import LoginView from "./views/LoginView.jsx";
import DetailsView from "./views/DetailsView.jsx";
import ErrorView from "./views/ErrorView.jsx";

import Navbar from "./components/Common/Navbar.jsx";
import Footer from "./components/Common/Footer.jsx";

import './App.css'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/details" element={<DetailsView />} />
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>

  );
};

export default Router;
