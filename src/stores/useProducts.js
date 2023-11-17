import { create } from "zustand";

export const productsLS = JSON.parse(localStorage.getItem('products')) || [];

const useProduct = create((set, get) => ({
  products: productsLS,
  setProducts: (newProduct) => {
    const newProducts = [...get().products, newProduct];

    localStorage.setItem('products', JSON.stringify(newProducts))

    return set({ products: newProducts })
  },
}));

export default useProduct;
