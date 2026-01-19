import { apiRequest } from "./client";
import type { GetCategoriesPayload, TCategoryWithProducts } from "./types";

export async function getCategories() {
  return apiRequest<GetCategoriesPayload>(
    "http://localhost:3333/categories/all",
    {
      method: "GET",
    }
  );
}

export async function getCategoryById(id: number) {
  return apiRequest<TCategoryWithProducts>(`http://localhost:3333/categories/${id}`, {
    method: "GET",
  });
}
