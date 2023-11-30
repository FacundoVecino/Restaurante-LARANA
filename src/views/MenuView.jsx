import { useQuery } from "@tanstack/react-query";

import { getProductsFn } from "../api/products.js";

import CardModal from "../components/Menu/CardModal.jsx";

const MenuView = () => {
  const { isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsFn,
  });

  return (
    <section className="menuSec">
      <h1 className="text-center mb-5">What&#39;s for Dinner Tonight?</h1>
      {isError && (
        <div className="alert alert-danger">
          Ocurrió un error al cargar los productos
        </div>
      )}
      {isLoading ? (
        <h3 className="text-center mt-4">Cargando platos...</h3>
      ) : (
        !isError && <CardModal />
      )}
    </section>
  );
};
export default MenuView;
