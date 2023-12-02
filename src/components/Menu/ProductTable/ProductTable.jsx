import CardModal from "../CardModal";

const ProductTable = (props) => {
  const { products } = props;

  const filteredProducts = products.filter((product) => product.available);

  return (
    <>
      {filteredProducts.map((product) => (
        <CardModal product={product} key={product.id} />
      ))}
    </>
  );
};

export default ProductTable;
