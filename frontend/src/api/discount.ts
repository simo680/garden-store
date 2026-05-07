import { apiRequest, BASE_URL } from './apiRequest';
import type { DiscountFormPayload } from './types';

export const postDiscountForm = async (data: DiscountFormPayload) =>
  await apiRequest<{ success: boolean }>(`${BASE_URL}/sale/send`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
