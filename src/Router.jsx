import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import { useSession } from "./stores/useSession";
import Profile from "./components/UserSupport/Profile";
import UserView from "./views/UserView";
import Support from "./components/UserSupport/Support";
import AccessPanelView from "./views/AccessPanelView";

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
            element={isLoggedIn ? <UserView /> : <Navigate to="/login" />}
          >
            <Route index element={<Profile />} />
            <Route path="support" element={<Support />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Router;
