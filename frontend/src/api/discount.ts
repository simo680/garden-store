import { apiRequest, BASE_URL } from './apiRequest';

export type DiscountFormPayload = {
  name: string;
  phone: string;
  email: string;
};

export const postDiscountForm = async (data: DiscountFormPayload) =>
  await apiRequest<{ success: boolean }>(`${BASE_URL}/sale/send`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
