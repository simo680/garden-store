import { useEffect } from 'react';
import { Link } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getDiscountProducts } from '../../store/reducers/productsSlice';
import { BASE_URL } from '../../api/apiRequest';
import { ProductItem } from '../ProductListItem/ProductListItem';

import {
  filterAndSortProducts,
  getEffectivePrice,
  hasProductDiscount,
} from '../../utils/productListUtils';

import s from './ProductsListSalesItems.module.scss';
import { Loader } from '../ui/Loader/Loader';
import { ErrorMessage } from '../ui/ErrorMessage/ErrorMessage';
import type { ProductsListSalesItemsProps } from './ProductsListSalesItems.props';

export const ProductsListSalesItems = (props: ProductsListSalesItemsProps) => {
  const { minPrice = '', maxPrice = '', sortBy = 'by default' } = props;
  const dispatch = useAppDispatch();
  const { discountProducts, isLoading, error } = useAppSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(getDiscountProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const sortedProducts = filterAndSortProducts(discountProducts, {
    minPrice,
    maxPrice,
    sortBy,
  });

  return (
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
  );
};
