import { useQuery } from "@tanstack/react-query";
import { getProductsFn } from "../../../api/products.js";
import { useEffect } from "react";

import useProduct from "../../../stores/useProducts.js";
import ModalMenu from "../../CardCrud/ModalCrud/ModalCrud.jsx";
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
      <ModalMenu />
    </section>
  );
};

export default AdminProducts;
