import { FaHome, FaShoppingCart, FaPlus, FaUser } from 'react-icons/fa';
import './Navbar.css'; // Importa tu archivo de estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">
            <FaHome />
          </a>
        </li>
        <li>
          <a href="/cart">
            <FaShoppingCart />
          </a>
        </li>
        <li>
          <a href="/add">
          <FaPlus />
          </a>
        </li>
        <li>
          <a href="/user">
            <FaUser />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
