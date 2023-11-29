// CardMenu.jsx

import './CardMenu.css';

const CardMenu = () => {
  return (
    <article
      className="menuCard d-flex flex-column flex-md-row justify-content-between"
      data-bs-toggle="modal"
      data-bs-target="#modalCard"
    >
      <div className="menuText p-3 p-md-5">
        <h5 className="mb-1 foodTitle">Plato</h5>
        <p className="foodInfo">
          Lorem ipsum, dolor dasplaceat rerum atque placeat rerum atque placeat
          rerum atque placeat rerum atquedsa ds dsa sda dsa asd sadsit amet
          consectetur adipisicing elit.
        </p>
        <p className="foodPrice py-2">Precio</p>
      </div>
      <div className="menuImage">
        <img
          src="https://www.laitalianapastas.com/wp-content/uploads/2021/07/empanadas-mondongo.jpg"
          alt="Plato"
        />
      </div>
    </article>
  );
};

export default CardMenu;
