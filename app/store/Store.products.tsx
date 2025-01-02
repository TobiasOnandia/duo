/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { ProductType } from "../types/typesProduct";

export interface StoreTypes {
  products: ProductType[];
  stock: { [key: number]: number };
  price: { [key: number]: number };
  sizes: { [key: number]: string[] };
  colors: { [key: number]: string[] };
  addProduct: (product: ProductType, quantity: number) => void;
  deleteAllProducts: () => void;
  deleteProduct: (id: number) => void;
  updateStockAndPrice: (productId: number, newStock: number, productPrice: number) => void;
  updateSizes: (productId: number, sizes: string[]) => void;
  updateColors: (productId: number, colors: string[]) => void;
}

export const useStore = create<StoreTypes>((set) => ({
  products: [],
  stock: {},
  price: {},
  sizes: {},
  colors: {},

  addProduct: (product: ProductType, quantity: number) =>
    set((state) => ({
      products: [...state.products, product],
      stock: { ...state.stock, [product.id]: quantity },
      price: { ...state.price, [product.id]: Math.round(product.price) },
    })),

  deleteAllProducts: () =>
    set(() => ({
      products: [],
      stock: {},
      price: {},
      sizes: {},
      colors: {},
    })),

  deleteProduct: (productId: number) =>
    set((state) => {
      const { [productId]: _, ...remainingStock } = state.stock;
      const { [productId]: __, ...remainingPrice } = state.price;
      const { [productId]: ___, ...remainingSizes } = state.sizes;
      const { [productId]: ____, ...remainingColors } = state.colors;

      return {
        products: state.products.filter((product) => product.id !== productId),
        stock: remainingStock,
        price: remainingPrice,
        sizes: remainingSizes,
        colors: remainingColors,
      };
    }),

  updateStockAndPrice: (productId: number, newStock: number, productPrice: number) =>
    set((state) => ({
      stock: { ...state.stock, [productId]: newStock },
      price: { ...state.price, [productId]: Math.round(newStock * productPrice) },
    })),

  updateSizes: (productId: number, sizes: string[]) =>
    set((state) => ({
      sizes: { ...state.sizes, [productId]: sizes },
    })),

  updateColors: (productId: number, colors: string[]) =>
    set((state) => ({
      colors: { ...state.colors, [productId]: colors },
    })),
}));
