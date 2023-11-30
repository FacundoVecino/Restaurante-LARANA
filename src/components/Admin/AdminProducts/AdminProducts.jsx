import useProduct from "../../../stores/useProducts.js";
import ModalMenu from "../../CardCrud/ModalCrud/ModalCrud.jsx";
import AdminTable from "./AdminTable/AdminTable.jsx";

const AdminProducts = () => {
  const { products, setProducts } = useProduct();

  return (
    <section>
      <AdminTable products={products} setProducts={setProducts} />
      <ModalMenu />
    </section>
  );
};

export default AdminProducts;
