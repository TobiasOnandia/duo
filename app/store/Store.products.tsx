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
  addProduct: (product: ProductType) => set((state) => ({ products: [...state.products, product] })),
  deleteAllProduct: () => set(() => ({ products: [] })),
  deleteProduct: (productId: number) => set((state) => ({ products: state.products.filter((product) => product.id !== productId) })),
}));