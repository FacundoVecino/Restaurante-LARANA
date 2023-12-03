import { create } from "zustand";

const useCart = create((set, get) => ({
  cartItems: [],
  addToCart: (newCartItem) => {
    const newCartItems = [...get().cartItems, newCartItem];
    set({ cartItems: newCartItems });
  },
  clearCart: () => {
    set({ cartItems: [] });
  },
}));

export default useCart;
