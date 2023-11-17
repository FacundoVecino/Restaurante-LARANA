import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import { useSession } from "./stores/useSession";

const Router = () => {
  const { isLoggedIn } = useSession();
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <LoginView />}
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <RegisterView />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Router;
