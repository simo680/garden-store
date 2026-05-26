import { useState } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { ProductsListSalesItems } from '../../components/ProductsListSaleItems/ProductsListSalesItems';
import { ProductFilters } from '../../components/ProductFilters/ProductFilters';

export const ProductsSalePage = () => {
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [sortOption, setSortOption] = useState<string | number>('by default');

  return (
    <PageWrapper title='Discounted items'>
      <ProductFilters
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />
      <ProductsListSalesItems
        minPrice={minPrice}
        maxPrice={maxPrice}
        sortBy={sortOption}
      />
    </PageWrapper>
  );
};
