import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MenuView from "./views/MenuView";
import LoginView from "./views/LoginView.jsx";
import DetailsView from "./views/DetailsView.jsx";
import ErrorView from "./views/ErrorView.jsx";

import AdminView from "./views/AdminView.jsx";
import AdminProducts from "./components/Admin/AdminProducts/AdminProducts.jsx";
import AdminUsers from "./components/Admin/AdminUsers/AdminUsers.jsx";
import AdminCRUD from "./components/Admin/AdminCRUD/AdminCRUD.jsx";

import AccessPanelView from "./views/AccessPanelView";
import RegisterView from "./views/RegisterView";
import UserView from "./views/UserView";

import { useSession } from "./stores/useSession";

import Profile from "./components/UserSupport/Profile";
import Support from "./components/UserSupport/Support";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Error404 from "./views/Error404";

import "./App.css";

const Router = () => {
  const { isLoggedIn } = useSession();
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container py-3">
        <Routes>
          <Route path="/access" element={<AccessPanelView />}>
            <Route index element={<LoginView />} />
            <Route path="register" element={<RegisterView />} />
          </Route>

          <Route
            path="/user"
            element={isLoggedIn ? <UserView /> : <Navigate to="/access" />}
          />
          <Route index element={<Profile />} />
          <Route path="support" element={<Support />} />
          <Route path="/" element={<MenuView />} />
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
export default Router;
