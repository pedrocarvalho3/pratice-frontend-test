import type { Product } from "../types";

export const initialProducts: Product[] = [
  {
    id: 1,
    name: "Notebook Dell",
    description: "Notebook Dell Inspiron 15 com 8GB RAM e 256GB SSD",
    price: 2499.99,
    category: "Eletrônicos",
    stock: 15,
    createdAt: new Date("2025-06-15"),
    updatedAt: new Date("2025-07-15"),
  },
  {
    id: 2,
    name: "Mouse Logitech",
    description: "Mouse óptico sem fio Logitech M280",
    price: 89.9,
    category: "Acessórios",
    stock: 32,
    createdAt: new Date("2025-05-20"),
    updatedAt: new Date("2025-07-20"),
  },
  {
    id: 3,
    name: "Teclado Mecânico",
    description: "Teclado mecânico RGB com switches Cherry MX",
    price: 299.99,
    category: "Acessórios",
    stock: 8,
    createdAt: new Date("2025-02-11"),
    updatedAt: new Date("2025-02-11"),
  },
];
