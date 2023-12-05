// Estilos
import FormModal from './FormModal/FormModal';
import './ModalCrud.css';

const ModalCrud = ({ product, closeModal }) => {


  return (
    <article
      className="modal fade"
      id="modalCard"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="card customModal mb-1 mx-3">
            <button
              type="button"
              className="btn-close p-3"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
            <img
              src={product ? product.image : ''}
              className="card-img-top"
              alt={product ? product.name : ''}
            />
            <FormModal product={product} closeModal={closeModal}/>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ModalCrud;