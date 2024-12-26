import { create } from "zustand";
import { ProductType } from "../components/types/types.product";

export interface StoreTypes {
  products: ProductType[];
  price: number;
  stock: number;
  addProduct: (product: ProductType) => void;
  deleteAllProduct: () => void;
  deleteProduct: (id: number) => void;
  calculatePrice: (id: number, quantity: number) => void;
}

export const useStore = create<StoreTypes>((set) => ({
  products: [],
  price: 0,
  stock: 1,
  addProduct: (product: ProductType) =>
    set((state) => ({ products: [...state.products, product] })),
  deleteAllProduct: () =>
    set(() => ({ products: [], price: 0 })),
  deleteProduct: (productId: number) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),
  calculatePrice: (id: number, quantity: number) =>
    set((state) => {
      const product = state.products.find((product) => product.id === id);
      const total = product ? product.price * quantity : 0;
      return { price: total };
    }),
}));
