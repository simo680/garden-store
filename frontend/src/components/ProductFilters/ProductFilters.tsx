import { PriceRange } from '../ui/PriceRange/PriceRange';
import { DiscountFilterButton } from '../ui/DiscountFilterButton/DiscountFilterButton';
import { DropdownSelect } from '../ui/DropdownSelect/DropdownSelect';
import { SORT_OPTIONS } from '../../utils/productListUtils';

import type { ProductFiltersProps } from './ProductFilters.props';

import s from './ProductFilters.module.scss';

export const ProductFilters = (props: ProductFiltersProps) => {
  const {
    minPrice,
    maxPrice,
    onMinPriceChange,
    onMaxPriceChange,
    sortOption,
    onSortChange,
    showDiscountFilter = false,
    showDiscountOnly = false,
    onDiscountToggle,
  } = props;

  return (
    <div className={s.filter}>
      <PriceRange
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinPriceChange={onMinPriceChange}
        onMaxPriceChange={onMaxPriceChange}
      />
      {showDiscountFilter && onDiscountToggle && (
        <DiscountFilterButton
          isActive={showDiscountOnly}
          onToggle={onDiscountToggle}
        />
      )}
      <DropdownSelect
        titleLabel='Sorted'
        options={[...SORT_OPTIONS]}
        value={sortOption}
        onChange={onSortChange}
      />
    </div>
  );
};
