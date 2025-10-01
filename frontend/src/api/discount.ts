import { apiRequest } from "./client";

export type DiscountFormPayload = {
  name: string;
  phone: string;
  email: string;
};

export async function postDiscountForm(data: DiscountFormPayload) {
  return apiRequest<{ success: boolean }>("http://localhost:3333/sale/send", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
