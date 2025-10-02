import { apiRequest } from "./client";

export type OrderFormPayload = {
  name: string;
  phone: string;
  email: string;
};

export async function postOrder(data: OrderFormPayload) {
  return apiRequest<{ success: boolean }>("http://localhost:3333/sale/send", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
