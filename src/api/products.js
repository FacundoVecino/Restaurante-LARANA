const API_URL = import.meta.env.VITE_API_URL;

export const getProductsFn = async () => {
  const res = await fetch(`${API_URL}/products`);

  if (!res.ok) {
    throw new Error("Ocurrió un error al traer los productos!");
  }

  const data = await res.json();
  return data;
};

export const postProductsFn = async (body) => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error al traer los productos!");
  }

  const data = await res.json();
  return data;
};

export const addToCartFn = async (products) => {
  const res = await fetch(`${API_URL}/cart`, {
    method: "POST",
    body: JSON.stringify({ cart: products }),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error al agregar productos al carrito!");
  }

  const data = await res.json();
  return data;
};
