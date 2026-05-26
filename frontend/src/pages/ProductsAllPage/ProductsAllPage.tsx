import { useState } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import ProductListItems from '../../components/ProductListAllItems/ProductListAllItems';
import { ProductFilters } from '../../components/ProductFilters/ProductFilters';

export const ProductsAllPage = () => {
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [showDiscountOnly, setShowDiscountOnly] = useState(false);
  const [sortOption, setSortOption] = useState<string | number>('by default');

  return (
    <PageWrapper title='All products'>
      <ProductFilters
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
        sortOption={sortOption}
        onSortChange={setSortOption}
        showDiscountFilter
        showDiscountOnly={showDiscountOnly}
        onDiscountToggle={() => setShowDiscountOnly((prev) => !prev)}
      />
      <ProductListItems
        minPrice={minPrice}
        maxPrice={maxPrice}
        showDiscountOnly={showDiscountOnly}
        sortBy={sortOption}
      />
    </PageWrapper>
  );
};
