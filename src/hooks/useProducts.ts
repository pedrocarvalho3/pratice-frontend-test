import { useContext } from "react";
import { ProductContext } from "../context/product-context";

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts deve ser usado dentro de ProductProvider");
  }
  return context;
};
