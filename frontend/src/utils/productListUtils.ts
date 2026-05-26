import type { TProduct } from '../api/types';

export const SORT_OPTIONS = [
  { value: 'by default', label: 'by default' },
  { value: 'newest', label: 'newest' },
  { value: 'price: high-low', label: 'price: high-low' },
  { value: 'price: low-high', label: 'price: low-high' },
] as const;

export const getEffectivePrice = (product: TProduct) =>
  product.discont_price > 0 && product.discont_price < product.price
    ? product.discont_price
    : product.price;

export const hasProductDiscount = (product: TProduct) =>
  product.discont_price > 0 && product.discont_price < product.price;

export type ProductFilterOptions = {
  minPrice?: number | '';
  maxPrice?: number | '';
  showDiscountOnly?: boolean;
  sortBy?: string | number;
};

export const filterAndSortProducts = (
  products: TProduct[],
  options: ProductFilterOptions = {},
): TProduct[] => {
  const {
    minPrice = '',
    maxPrice = '',
    showDiscountOnly = false,
    sortBy = 'by default',
  } = options;

  const filtered = products.filter((product) => {
    const price = getEffectivePrice(product);

    if (showDiscountOnly && !hasProductDiscount(product)) {
      return false;
    }

    if (minPrice !== '' && price < minPrice) {
      return false;
    }

    if (maxPrice !== '' && price > maxPrice) {
      return false;
    }

    return true;
  });

  return [...filtered].sort((a, b) => {
    const priceA = getEffectivePrice(a);
    const priceB = getEffectivePrice(b);

    switch (sortBy) {
      case 'newest':
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case 'price: high-low':
        return priceB - priceA;
      case 'price: low-high':
        return priceA - priceB;
      default:
        return 0;
    }
  });
};
