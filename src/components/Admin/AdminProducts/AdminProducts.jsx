import { useQuery } from "@tanstack/react-query";
import { getProductsFn } from "../../../api/products.js";
import { useEffect } from "react";

import useProduct from "../../../stores/useProducts.js";
import ModalCrud from "../../CardCrud/ModalCrud/ModalCrud.jsx";
import AdminTable from "./AdminTable/AdminTable.jsx";

const AdminProducts = () => {
  const { setProducts } = useProduct();

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsFn,
  });

  useEffect(() => {
    setProducts(products);
  }, [products, setProducts]);

  return (
    <section>
      <AdminTable products={products} setProducts={setProducts} />
      <ModalCrud />
    </section>
  );
};

export default AdminProducts;