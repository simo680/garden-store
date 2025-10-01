import { apiRequest } from "./client";

export type GetCategoriesPayload = {
  categories: string[];
};

export type Category = {
  id: number;
  title: string;
  img: string;
};

export async function getCategories() {
  return apiRequest<GetCategoriesPayload>(
    "http://localhost:3333/categories/all",
    {
      method: "GET",
    }
  );
}

export async function getCategoryById(id: number) {
  return apiRequest<Category>(`http://localhost:3333/categories/${id}`, {
    method: "GET",
  });
}
