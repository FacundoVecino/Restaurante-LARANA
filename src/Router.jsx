import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import { useSession } from "./stores/useSession";
import Profile from "./components/UserSupport/Profile";
import UserView from "./views/UserView";
import Support from "./components/UserSupport/Support";

const Router = () => {
  const { isLoggedIn } = useSession();
  return (
    <BrowserRouter>
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
            element={
              isLoggedIn ? (
                <UserView />
              ) : (
                <Navigate to="/" />
              )
            }
          >
            {/* Rutas secundarias bajo /user */}
            <Route index element={<Profile/>} />
            <Route path="support" element={<Support/>} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Router;
