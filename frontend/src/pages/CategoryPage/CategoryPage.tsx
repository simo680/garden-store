import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { ProductItem } from '../../components/ProductListItem/ProductListItem';
import { ProductFilters } from '../../components/ProductFilters/ProductFilters';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getByIdCategories } from '../../store/reducers/productsSlice';
import { BASE_URL } from '../../api/apiRequest';
import { Loader } from '../../components/ui/Loader/Loader';
import { ErrorMessage } from '../../components/ui/ErrorMessage/ErrorMessage';
import {
  filterAndSortProducts,
  getEffectivePrice,
  hasProductDiscount,
} from '../../utils/productListUtils';

import s from './CategoryPage.module.scss';

export const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [showDiscountOnly, setShowDiscountOnly] = useState(false);
  const [sortOption, setSortOption] = useState<string | number>('by default');

  const { selectedCategory, isLoading, error } = useAppSelector(
    (state) => state.products,
  );

  useEffect(() => {
    if (id) {
      dispatch(getByIdCategories(Number(id)));
    }
  }, [id, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const title = selectedCategory?.category?.title || 'Category';
  const products = selectedCategory?.data || [];
  const sortedProducts = filterAndSortProducts(products, {
    minPrice,
    maxPrice,
    showDiscountOnly,
    sortBy: sortOption,
  });

  return (
    <PageWrapper title={title}>
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
      <div className={s.list}>
        {sortedProducts.map((product) => {
          const price = getEffectivePrice(product);
          const isDiscount = hasProductDiscount(product);

          return (
            <Link
              className={s.link}
              key={product.id}
              to={`/products/${product.id}`}
            >
              <ProductItem
                imgSrc={`${BASE_URL}${product.image}`}
                title={product.title}
                price={price}
                oldPrice={isDiscount ? product.price : undefined}
              />
            </Link>
          );
        })}
      </div>
    </PageWrapper>
  );
};
