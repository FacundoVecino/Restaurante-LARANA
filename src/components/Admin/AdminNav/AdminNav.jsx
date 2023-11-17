import { Link, useLocation } from "react-router-dom";
import './AdminNav.css';

const AdminNav = () => {
  const location = useLocation();

  return (
    <div className="container py-5">
      <ul className="nav nav-underline d-flex justify-content-around">
        <li className="nav-item">
          <Link
            to="/admin/"
            className={`nav-link ${location.pathname === "/admin/" ? 'active' : ''}`}
          >
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/users"
            className={`nav-link ${location.pathname === "/admin/users" ? 'active' : ''}`}
          >
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/crud"
            className={`nav-link ${location.pathname === "/admin/crud" ? 'active' : ''}`}
          >
            CRUD
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminNav;
