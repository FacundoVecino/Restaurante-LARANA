const API_URL = import.meta.env.VITE_API_URL;

export const getProductsFn = async () => {
  const res = await fetch(`${API_URL}/products`);

  if (!res.ok) {
    throw new Error("Ocurrió un error al traer los productos!");
  }

  const data = await res.json();
  return data;
};
