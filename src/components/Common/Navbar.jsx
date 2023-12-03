import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaPlus, FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal,}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  // Función para limpiar todo el carrito
  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <nav className="navbar">
      <ul className="list-unstyled d-flex w-100 justify-content-around">
        <li className='flex-fill text-center'>
          <NavLink className={`nav-link`} aria-current="page" to="/login">
            <FaHome />
          </NavLink>
        </li>
        <li className='flex-fill text-center'>
          <NavLink to="/cart">
          <div className='container-icon'>
        <div
          className='container-cart-icon'
          onClick={() => setActive(!active)}
        >
            <FaShoppingCart />
            <div className='count-products'>
            <span id='contador-productos'>{countProducts}</span>
          </div>
        </div>
        <div
          className={`mb-5 mx-2 py-2 container-cart-products ${
            active ? '' : 'hidden-cart'
          }`}
        >
          {allProducts.length ? (
            <>
              <div className='row-product'>
                {allProducts.map((product) => (
                  <div className='cart-product' key={product.id}>
                    <div className='info-cart-product'>
                      <span className='cantidad-producto-carrito'>
                        {product.quantity}
                      </span>
                      <p className='titulo-producto-carrito'>
                        {product.nameProduct}
                      </p>
                      <span className='precio-producto-carrito'>
                        ${product.price}
                      </span>
                    </div>
                    {/* Icono para eliminar el producto del carrito */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='icon-close'
                      onClick={() => onDeleteProduct(product)}
                    >
                    </svg>
                  </div>
                ))}
              </div>
              {/* Muestra el total y botón para vaciar el carrito */}
              <div className='cart-total'>
                <h3>Total:</h3>
                <span className='total-pagar'>${total}</span>
              </div>
              <button className='btn-clear-all' onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className='text-center'>El carrito está vacío</p>
          )}
        </div>
      </div>
          </NavLink>
        </li>
        <li className='flex-fill text-center'>
          <NavLink className={`nav-link`} to="/add">
            <FaPlus />
          </NavLink>
        </li>
        <li className='flex-fill text-center'>
          <NavLink className={`nav-link`} to="/user">
            <FaUser />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;