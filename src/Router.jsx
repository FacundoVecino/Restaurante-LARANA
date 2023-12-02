import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AccessPanelView from "./views/AccessPanelView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import UserView from "./views/UserView";

import { useSession } from "./stores/useSession";

import Profile from "./components/UserSupport/Profile";
import Support from "./components/UserSupport/Support";

const Router = () => {
  const { isLoggedIn } = useSession();
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/access" element={<AccessPanelView />}>
            <Route index element={<LoginView />} />
            <Route path="register" element={<RegisterView />} />
          </Route>
          
          <Route
            path="/user"
            element={
              isLoggedIn ? (
                <UserView />
              ) : (
                <Navigate to="/access" />
              )
            }
          >
            <Route index element={<Profile/>} />
            <Route path="support" element={<Support/>} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Router;

