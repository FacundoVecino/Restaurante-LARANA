import { Link, useLocation } from "react-router-dom";
import "./UserSupportNav.css"

const UserSupportNav = () => {
    const location = useLocation();

  return (
    <div className="container py-5">
      <ul className="nav nav-underline d-flex justify-content-around">
        <li className="nav-item">
          <Link
            to="/user"
            className={`nav-link ${location.pathname === "/user" ? 'active' : ''}`}
          >
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/user/support"
            className={`nav-link ${location.pathname === "/user/support" ? 'active' : ''}`}
          >
            Support
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default UserSupportNav