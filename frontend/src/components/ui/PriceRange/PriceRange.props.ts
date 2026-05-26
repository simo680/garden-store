export type PriceRangeProps = {
  minPrice: number | '';
  maxPrice: number | '';
  onMinPriceChange: (value: number | '') => void;
  onMaxPriceChange: (value: number | '') => void;
};
