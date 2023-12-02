import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AccessPanelView from "./views/AccessPanelView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import UserView from "./views/UserView";

import { useSession } from "./stores/useSession";

import Profile from "./components/UserSupport/Profile";
import Support from "./components/UserSupport/Support";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Error404 from "./views/Error404";

const Router = () => {
  const { isLoggedIn } = useSession();
  return (
    <BrowserRouter>
      <Navbar/>
      <main>
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
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
