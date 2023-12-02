import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSession } from "./stores/useSession";
import { useState } from "react";

import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import UserView from "./views/UserView";
import ErrorView from "./views/ErrorView";

import Profile from "./components/UserSupport/Profile";
import Support from "./components/UserSupport/Support";

import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";

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
      <main>
        <Routes>

          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/user" /> : <LoginView />}
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <RegisterView />}
          />
          <Route
            path="/user"
            element={isLoggedIn ? <UserView /> : <Navigate to="/" />}
          />
          {/* Rutas secundarias bajo /user */}
          <Route index element={<Profile />} />
          <Route path="support" element={<Support />} />
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
