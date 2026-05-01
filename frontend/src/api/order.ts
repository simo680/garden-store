import { apiRequest, BASE_URL } from './apiRequest';

export type OrderFormPayload = {
  name: string;
  phone: string;
  email: string;
};

export const postOrder = async (data: OrderFormPayload) =>
  await apiRequest<{ success: boolean }>(`${BASE_URL}/sale/send`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
