import useProduct from '../../../stores/useProducts.js';
import ModalMenu from '../../CardMenu/Modal/ModalMenu.jsx';
import AdminTable from "./AdminTable/AdminTable.jsx"

const AdminProducts = () => {
  const { products, setProducts } = useProduct();

  
  return (
    <section className='table-responsive'>
      <AdminTable products={products} setProducts={setProducts} />
      <ModalMenu />
    </section>
  )
}

export default AdminProducts;
