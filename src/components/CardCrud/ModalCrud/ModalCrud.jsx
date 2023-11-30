import './ModalCrud.css'

const ModalMenu = () => {
  return (
    <article
        className="modal fade"
        id="modalCard"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={"-1"}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
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
                src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/7fd9e77b-3396-49f3-be08-fceef56376bf/Derivates/8a096b0f-382a-47ac-b11a-62b630e0e59e.jpg"
                className="card-img-top"
                alt="Plato"
              />
              <div className="card-body">
                <h5 className="card-title">Plato</h5>
                <div className="scrollText ">
                  <p className="card-text">
                    ¿Sabías que la milanesa napolitana se creó con el fin de
                    disimular las milanesas quemadas? Pues sí, en el bodegón
                    Napolitano ubicada en Buenos Aires, en 1.900 crearon este
                    tipo de presentación de milanesa para que los comensales no
                    se dieran cuenta que se les quemó.
                  </p>
                </div>
                <h6 className="foodPrice mt-2">Precio</h6>
                <div className="text-center">
                  <button className="customBtnModal">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
  )
}

export default ModalMenu