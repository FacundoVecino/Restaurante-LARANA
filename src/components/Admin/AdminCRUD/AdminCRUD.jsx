import AdminForm from "./AdminForm/AdminForm.jsx";
import useProduct from "../../../stores/useProducts.js";

const AdminCRUD = () => {
  const { setProducts } = useProduct();
  return (
    <section className="d-flex justify-content-center">
      <AdminForm setProducts={setProducts} />
    </section>
  );
};

export default AdminCRUD;
