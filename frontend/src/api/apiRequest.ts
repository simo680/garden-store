export const BASE_URL = 'http://localhost:3333/';

export const apiRequest = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  try {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error in apiRequest (${url}):`, error);

    throw error;
  }
};
