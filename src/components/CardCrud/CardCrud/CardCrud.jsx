import { FaEdit } from "react-icons/fa";
import "./CardCrud.css";

const CardCrud = (props) => {
  const { product, openModal } = props;

  return (
    <article className="menuCard card d-flex flex-row my-4">
      <div className="menuImage">
        <img
          src={product.image}
          className="object-fit-cover"
          alt={product.name}
        />
      </div>
      <div className="menuText p-4 flex-grow-1">
        <h5>{product.name}</h5>
        <p className="foodPrice">${product.cost}</p>
      </div>
      <div className="d-flex align-items-center px-4">
        <button
          className="button-edit"
          onClick={() => openModal(product)}
          data-bs-toggle="modal"
          data-bs-target="#modalCard"
        >
          <FaEdit />
        </button>
      </div>
    </article>
  );
};

export default CardCrud;
