import { create } from "zustand";
import { ProductType } from "../components/types/types.product";

export interface StoreTypes {
  products: ProductType[];
  stock: { [key: number]: number };
  price: { [key: number]: number };
  sizes: { [key: number]: string[] };
  colors: { [key: number]: string[] };
  addProduct: (product: ProductType) => void;
  deleteAllProduct: () => void;
  deleteProduct: (id: number) => void;
  calculateStock: (productId: number, stock: number) => void;
  calculatePrice: (productId: number, price: number) => void;
  selectedSizes: (productId: number, sizes: string[]) => void;
  selectedColors: (productId: number, colors: string[]) => void;
}

export const useStore = create<StoreTypes>((set) => ({
  products: [],
  price: {},
  stock: {} as { [key: number]: number },
  sizes: {} as { [key: number]: string[] },
  colors: {} as { [key: number]: string[] },
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
  calculateStock: (productId: number, stock: number) => set((state) => {
    return { stock: { ...state.stock, [productId]: stock } }
  }),
  calculatePrice: (productId: number, price: number) => set((state) => {
    return { price: { ...state.price, [productId]: Math.round(price * state.stock[productId]) } }
  }),
  selectedSizes: (productId: number, sizes: string[]) => set((state) => {
    return { sizes: { ...state.sizes, [productId]: sizes } }
  }),
  selectedColors: (productId: number, colors: string[]) => set((state) => {
    return { colors: { ...state.colors, [productId]: colors } }
  }),
}));
