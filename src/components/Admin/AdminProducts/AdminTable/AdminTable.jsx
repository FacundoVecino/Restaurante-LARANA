import CardCrud from "../../../CardCrud/Card/CardCrud.jsx";
import "./AdminTable.css";

const AdminTable = (props) => {
  const { products = [] } = props;

  console.log(products);
  return (
    <div className="products-table">
      {products.map((product) => (
        <CardCrud product={product} key={product.id} />
      ))}
    </div>
  );
};

export default AdminTable;
