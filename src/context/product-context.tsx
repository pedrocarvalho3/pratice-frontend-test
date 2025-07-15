import React, { useState, useEffect, createContext } from "react";
import type { Product, ProductFormData } from "../types";
import { initialProducts } from "../mocks/products";

interface ProductContextType {
  products: Product[];
  addProduct: (product: ProductFormData) => void;
  updateProduct: (id: number, product: ProductFormData) => void;
  deleteProduct: (id: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(initialProducts);
  }, []);

  const addProduct = (productData: ProductFormData) => {
    const newProduct: Product = {
      id: Math.floor(100 + Math.random() * 900),
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const updateProduct = (id: number, productData: ProductFormData) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, ...productData, updatedAt: new Date() }
          : product
      )
    );
  };

  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
export type { ProductContextType };
