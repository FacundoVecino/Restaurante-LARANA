import { useState } from "react";
import "./CardModal.css";

const CardModal = (props) => {
  const {product} = props

const [cart, setCart] = useState([])

const addToCart = (product) => {
  const productInCart = cart.find((item) => item.id === product.id);
};

  return (
    <div className="componentContainer">
      {products.map((product) => (
        <article
          key={product.id}
          className="menuCard gap-2 ms-2 me-2 mb-5"
          data-bs-toggle="modal"
          data-bs-target={`#modalCard${product.id}`}
        >
          <div className="menuText ms-4">
            <h5 className="mb-1 foodTitle">{product.nombre}</h5>
            <p className="foodInfo">{product.descripcion}</p>
            <p className="foodPrice">{product.precio}</p>
          </div>
          <div className="menuImage">
            <img src={product.imagen} alt={product.nombre} />
          </div>
        </article>

        <div
          key={product.id}
          className="modal fade"
          id={`modalCard${product.id}`}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby={`staticBackdropLabel${product.id}`}
          aria-hidden="true"
        >
          <div className="card customModal mb-1 mx-3">
            <div className="text-center">
              <button
                className="customBtnModal"
                onClick={()=>addToCart(product)}
                data-bs-dismiss="modal"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardModal;
