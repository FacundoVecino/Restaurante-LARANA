import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainView from "./views/MainView";
import LoginView from "./views/LoginView.jsx";
import DetailsView from "./views/DetailsView.jsx";
import ErrorView from "./views/ErrorView.jsx";

import AdminView from "./views/AdminView.jsx";
import AdminProducts from "./components/Admin/AdminProducts/AdminProducts.jsx";
import AdminUsers from "./components/Admin/AdminUsers/AdminUsers.jsx";
import AdminCRUD from "./components/Admin/AdminCRUD/AdminCRUD.jsx";

import Navbar from "./components/Common/Navbar.jsx";
import Footer from "./components/Common/Footer.jsx";

import "./App.css";

const AppRouter = () => {

  return (
<BrowserRouter>
      <Navbar />
      <main className="container py-3">
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="details" element={<DetailsView />} />
          <Route path="*" element={<ErrorView />} />
          <Route path="admin" element={<AdminView />}>
            <Route index element={<AdminProducts />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="crud" element={<AdminCRUD />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};


export default AppRouter
