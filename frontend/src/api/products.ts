import { apiRequest, BASE_URL } from './apiRequest';
import type { TProduct } from './types';

export async function fetchAllProducts() {
  return apiRequest<TProduct[]>(`${BASE_URL}/products/all`, {
    method: 'GET',
  });
}

export async function getProductById(id: number) {
  return apiRequest<TProduct>(`${BASE_URL}/products/${id}`, {
    method: 'GET',
  });
}
