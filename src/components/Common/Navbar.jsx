import { NavLink } from "react-router-dom";

import { FaHome, FaShoppingCart, FaPlus, FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            className={`nav-link ${({ isActive }) =>
              isActive ? "active" : ""}`}
            aria-current="page"
            to="/"
          >
            <FaHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`nav-link ${({ isActive }) =>
              isActive ? "active" : ""}`}
            to="/add"
          >
            <FaPlus />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`nav-link ${({ isActive }) =>
              isActive ? "active" : ""}`}
            to="/user"
          >
            <FaUser />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
