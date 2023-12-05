import useProduct from '../../stores/useProducts';
import './Cart.css';

const Cart = ({ allProducts, total, onDeleteProduct, onCleanCart }) => {
  console.log = useProduct();



  return (
    <div className={`mb-5 mx-2 py-2 container-cart-products`}>
      {allProducts && allProducts.length ? (
        <div className='row-product'>
          {allProducts.map((product) => (
            <div className='cart-product' key={product.id}>
              <div className='info-cart-product'>
                <span className='cantidad-producto-carrito'>
                  {product.quantity || 0}
                </span>
                <p className='titulo-producto-carrito'>
                  {product.nameProduct}
                </p>
                <span className='precio-producto-carrito'>
                  ${product.price}
                </span>
              </div>
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
      ) : (
        <p className='text-center'>El carrito está vacío</p>
      )}

      <div className='cart-total'>
        <h3>Total:</h3>
        <span className='total-pagar'>${total}</span>
      </div>

      <button className='btn-clear-all' onClick={onCleanCart}>
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Cart;