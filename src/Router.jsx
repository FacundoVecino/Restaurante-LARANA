
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSession } from "./stores/useSession";
import { useState } from "react";

import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import UserView from "./views/UserView";
import ErrorView from "./views/ErrorView";

import MenuView from "./views/MenuView";
import DetailsView from "./views/DetailsView.jsx";

import AdminView from "./views/AdminView.jsx";
import AdminProducts from "./components/Admin/AdminProducts/AdminProducts.jsx";
import AdminUsers from "./components/Admin/AdminUsers/AdminUsers.jsx";
import AdminCRUD from "./components/Admin/AdminCRUD/AdminCRUD.jsx";

import AccessPanelView from "./views/AccessPanelView";

import Profile from "./components/UserSupport/Profile";
import Support from "./components/UserSupport/Support";

import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import ComeWebView from "./views/ComeWebView.jsx";
import AboutUsView from "./views/AboutUsView.jsx";

const Router = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const { isLoggedIn } = useSession();
  return (
    <BrowserRouter>
      <Navbar
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <main className="container py-3">
        <Routes>
          <Route path="/access" element={<AccessPanelView />}>
            <Route index element={<LoginView />} />
            <Route path="register" element={<RegisterView />} />
          </Route>
          <Route
            path="/user"
            element={isLoggedIn ? <UserView /> : <Navigate to="/access" />}
          >
            <Route index element={<Profile />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path="/" element={<MenuView />} />
          <Route path="details" element={<DetailsView />} />
          <Route path="/ComeWeb" element={<ComeWebView />} />
        <Route path="/AboutUs" element={<AboutUsView/>} />
          <Route path="admin" element={<AdminView />}>
            <Route index element={<AdminProducts />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="crud" element={<AdminCRUD />} />
          </Route>

          <Route path="*" element={<ErrorView />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;