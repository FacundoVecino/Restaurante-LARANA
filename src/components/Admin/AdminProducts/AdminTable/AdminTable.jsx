import CardCrud from "../../../CardCrud/CardCrud/CardCrud.jsx";
import "./AdminTable.css";

const AdminTable = (props) => {
  const { products = [], openModal } = props;

  return (
    <div className="products-table d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <CardCrud product={product} openModal={openModal} key={product.id} />
      ))}
    </div>
  );
};

export default AdminTable;
