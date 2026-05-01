import { apiRequest, BASE_URL } from './apiRequest';

export type TProduct = {
  id: number;
  title: string;
  price: number;
  /*
   ** TODO: Поменять на discount_price, когда поменяю на бэке
   */
  discont_price: number;
  description: string;
  image: string;
};

export const getAllProducts = async () =>
  await apiRequest<TProduct[]>(`${BASE_URL}/products/all`, {
    method: 'GET',
  });

export const getProductById = async (id: number) =>
  await apiRequest<TProduct>(`${BASE_URL}/products/${id}`, {
    method: 'GET',
  });
