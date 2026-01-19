import { apiRequest } from "./client";
import type { DiscountFormPayload } from "./types";

export async function postDiscountForm(data: DiscountFormPayload) {
  return apiRequest<{ success: boolean }>("http://localhost:3333/sale/send", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
