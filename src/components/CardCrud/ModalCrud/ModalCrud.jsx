import "./ModalCrud.css";

const ModalCrud = (props) => {
  const { product } = props;

  return (
    <article className="modal fade" id="modalCard" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={"-1"} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="text-end me-3">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="card customModal mb-1 mx-3">
            <img
              src={product ? product.image : ""}
              className="card-img-top"
              alt={product ? product.name : ""}
            />
            <div className="card-body">
              <h5 className="card-title">{product ? product.name : ""}</h5>
              <p className="card-ingredients">
                {product ? product.ingredients : ""}
              </p>
              <p className="card-text foodPrice">
                {product ? product.cost : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ModalCrud;
