import { apiRequest } from "./client";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  
};

export async function getAllProducts() {
  return apiRequest<Product[]>("http://localhost:3333/products/all", {
    method: "GET",
  });
}

export async function getProductById(id: number) {
  return apiRequest<Product>(`http://localhost:3333/products/${id}`, {
    method: "GET",
  });
}