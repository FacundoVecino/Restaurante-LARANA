import { useState } from "react";
import useProduct from "../../../stores/useProducts.js";
import ModalCrud from "../../CardCrud/ModalCrud/ModalCrud.jsx";
import AdminTable from "./AdminTable/AdminTable.jsx";


const AdminProducts = () => {
  const { products, setProducts } = useProduct();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  return (
    <section>
      <AdminTable
        products={products}
        setProducts={setProducts}
        openModal={openModal}
      />
      <ModalCrud product={selectedProduct} />
    </section>
  );
};

export default AdminProducts;