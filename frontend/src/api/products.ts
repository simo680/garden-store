import { apiRequest } from "./client";

export type TProduct = {
  id: number;
  title: string;
  price: number;
  discont_price: number;
  description: string;
  image: string;
};


export async function getAllProducts() {
  return apiRequest<TProduct[]>("http://localhost:3333/products/all", {
    method: "GET",
  });
}

export async function getProductById(id: number) {
  return apiRequest<TProduct>(`http://localhost:3333/products/${id}`, {
    method: "GET",
  });
}
