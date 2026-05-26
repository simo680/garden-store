export type ProductFiltersProps = {
  minPrice: number | '';
  maxPrice: number | '';
  onMinPriceChange: (value: number | '') => void;
  onMaxPriceChange: (value: number | '') => void;
  sortOption: string | number;
  onSortChange: (value: string | number) => void;
  showDiscountFilter?: boolean;
  showDiscountOnly?: boolean;
  onDiscountToggle?: () => void;
};
