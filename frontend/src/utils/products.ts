import { apiRequest } from "./client";
import type { TProduct } from "./types";

export async function fetchAllProducts() {
  return apiRequest<TProduct[]>("http://localhost:3333/products/all", {
    method: "GET",
  });
}

export async function getProductById(id: number) {
  return apiRequest<TProduct>(`http://localhost:3333/products/${id}`, {
    method: "GET",
  });
}
