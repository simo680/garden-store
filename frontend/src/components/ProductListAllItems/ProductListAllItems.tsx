import { useEffect } from 'react';
import { Link } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllProducts } from '../../store/reducers/productsSlice';
import { BASE_URL } from '../../api/apiRequest';
import { ProductItem } from '../ProductListItem/ProductListItem';
import {
  filterAndSortProducts,
  getEffectivePrice,
  hasProductDiscount,
} from '../../utils/productListUtils';

import s from './ProductListAllItems.module.scss';
import { Loader } from '../ui/Loader/Loader';
import type { ProductListItemsProps } from './ProductListAllItems.props';
import { ErrorMessage } from '../ui/ErrorMessage/ErrorMessage';

const ProductListItems = (props: ProductListItemsProps) => {
  const {
    minPrice = '',
    maxPrice = '',
    showDiscountOnly = false,
    sortBy = 'by default',
  } = props;

  const dispatch = useAppDispatch();

  const { allProducts, isLoading, error } = useAppSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const sortedProducts = filterAndSortProducts(allProducts, {
    minPrice,
    maxPrice,
    showDiscountOnly,
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

export default ProductListItems;
