import CardModal from "../CardModal";

const ProductTable = (props) => {
  const { products } = props;

  return (
    <>
      {products.map((product) => (
        <CardModal product={product} key={product.id} />
      ))}
    </>
  );
};

export default ProductTable;
