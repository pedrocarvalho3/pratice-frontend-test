import React, { useState, useEffect, createContext } from "react";
import type { Product, ProductFormData } from "../types";
import { initialProducts } from "../mocks/products";

interface ProductContextType {
  products: Product[];
  addProduct: (product: ProductFormData) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(initialProducts);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
export type { ProductContextType };
