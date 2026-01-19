import { apiRequest, BASE_URL } from "./apiRequest";
import type { OrderFormPayload } from "./types";

export async function postOrder(data: OrderFormPayload) {
  return apiRequest<{ success: boolean }>(`${BASE_URL}/sale/send`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

