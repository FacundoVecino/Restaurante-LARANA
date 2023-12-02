import { Link, useLocation } from "react-router-dom";
import "../UserSupport/UserSupportNav/UserSupportNav.css"
import logo from "../../assets/logo.png";

const AccessPanelNav = () => {
  const location = useLocation();

  return (
    <div className="container text-center pb-3">
      <img src={logo} className="logo" alt="Logo" />
      <ul className="nav nav-underline d-flex justify-content-around">
        <li className="nav-item">
          <Link
            to="/access/"
            className={`nav-link ${
              location.pathname === "/access" ? "active" : ""
            }`}
          >
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/access/register"
            className={`nav-link ${
              location.pathname === "/access/register" ? "active" : ""
            }`}
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default AccessPanelNav;
