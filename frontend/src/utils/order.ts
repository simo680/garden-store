import { apiRequest } from "./client";
import type { OrderFormPayload } from "./types";

export async function postOrder(data: OrderFormPayload) {
  return apiRequest<{ success: boolean }>("http://localhost:3333/sale/send", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
