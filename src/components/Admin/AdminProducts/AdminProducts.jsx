import { useEffect } from "react";
import useProduct from "../../../stores/useProducts.js";
import ModalCrud from "../../CardCrud/ModalCrud/ModalCrud.jsx";
import AdminTable from "./AdminTable/AdminTable.jsx";

const AdminProducts = () => {
  const { products, setProducts, getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <section>
      <AdminTable products={products} setProducts={setProducts} />
      <ModalCrud />
    </section>
  );
};

export default AdminProducts;