import { apiRequest, BASE_URL } from './apiRequest';

export type GetCategoriesPayload = {
  categories: string[];
};

export type Category = {
  id: number;
  title: string;
  img: string;
};

export const getCategories = () =>
  apiRequest<GetCategoriesPayload>('http://localhost:3333/categories/all', {
    method: 'GET',
  });

export const getCategoryById = async (id: number) =>
  await apiRequest<Category>(`${BASE_URL}/categories/${id}`, {
    method: 'GET',
  });
