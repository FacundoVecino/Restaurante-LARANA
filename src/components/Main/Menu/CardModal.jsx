import "./CardModal.css";

const NewModal = () => {
  return (
    <div className="componentContainer">
      <article
        className="menuCard gap-2 ms-2 me-2 mb-5"
        data-bs-toggle="modal"
        data-bs-target="#modalCard"
      >
        <div className="menuText ms-4">
          <h5 className="mb-1 foodTitle">Plato</h5>
          <p className="foodInfo">
            Lorem ipsum, dolor dasplaceat rerum atque placeat rerum atque
            placeat rerum atque placeat rerum atquedsa ds dsa sda dsa asd sadsit
            amet consectetur adipisicing elit. Commodi laborum esse quasi
            placeat rerum atque, placeat rerum atqueplaceat rerum atqueplaceat
            rerum atqueplaceat rerum atqueplaceat rerum atqueplaceat rerum atque
            neque ut facilis rem ipsa sunt fugit mollitia, ducimus quibusdam
            enim debitis consectetur optio illum.
          </p>
          <p className="foodPrice">Precio</p>
        </div>
        <div className="menuImage">
          <img
            src="https://www.laitalianapastas.com/wp-content/uploads/2021/07/empanadas-mondongo.jpg"
            alt="Plato"
          />
        </div>
      </article>

      <div
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
      </div>
    </div>
  );
};
export default NewModal;
