import useProduct from '../../../stores/useProducts.js';
import AdminTable from "./AdminTable/AdminTable.jsx"

const AdminProducts = () => {
  const { products, setProducts } = useProduct();

  
  return (
    <>
      <AdminTable products={products} setProducts={setProducts} />
    </>
  )
}

export default AdminProducts;
