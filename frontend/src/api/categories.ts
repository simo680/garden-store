import { apiRequest, BASE_URL } from "./apiRequest";
import type { GetCategoriesPayload, TCategoryWithProducts } from "./types";

export async function getCategories() {
  return apiRequest<GetCategoriesPayload>(`${BASE_URL}/categories/all`, {
    method: "GET",
  });
}

export async function getCategoryById(id: number) {
  return apiRequest<TCategoryWithProducts>(`${BASE_URL}/categories/${id}`, {
    method: "GET",
  });
}
