import { create } from "zustand";
import { ProductType } from "../components/types/types.product";

export interface StoreTypes {
  products: ProductType[];
  addProduct: (product: ProductType) => void;
  deleteAllProduct: () => void;
  deleteProduct: (id: number) => void;
}

export const useStore = create<StoreTypes>((set) => ({
  products: [],
  price: {},
  stock: {}, 
  addProduct: (product: ProductType) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  deleteAllProduct: () => set(() => ({ products: [], stock: {}, price: {} })),
  deleteProduct: (productId: number) =>
    set((state) => {
      const newProducts = state.products.filter((product) => product.id !== productId);
      return { products: newProducts };
    }),
}));
