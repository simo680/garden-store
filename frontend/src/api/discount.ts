export type DiscountFormPayload = {
  name: string;
  phone: string;
  email: string;
};

export async function sendDiscountForm(data: DiscountFormPayload) {
  const response = await fetch("http://localhost:3333/sale/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit discount form");
  }

  return response.json();
}
