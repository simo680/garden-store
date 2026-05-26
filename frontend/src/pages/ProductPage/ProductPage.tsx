import { useEffect } from 'react';
import { useParams } from 'react-router';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  getByIdProduct,
  setProductQuantity,
} from '../../store/reducers/productsSlice';
import { addToCart } from '../../store/reducers/cartSlice';
import { BASE_URL } from '../../api/apiRequest';
import { Loader } from '../../components/ui/Loader/Loader';

import s from './ProductPage.module.scss';
import Button from '../../components/ui/Button/Button';
import { Counter } from '../../components/ui/Counter/Counter';
import { DiscountPercent } from '../../components/DiscountPercent/DiscountPercent';
import { ErrorMessage } from '../../components/ui/ErrorMessage/ErrorMessage';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const { selectedProduct, isLoading, error, productQuantities } =
    useAppSelector((state) => state.products);

  const quantity = Number(id) ? (productQuantities[Number(id)] ?? 1) : 1;

  useEffect(() => {
    if (id) {
      dispatch(getByIdProduct(Number(id)));
    }
  }, [id, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (!selectedProduct) {
    return <div>Товар не найден.</div>;
  }

  const price =
    selectedProduct.discont_price > 0 &&
    selectedProduct.discont_price < selectedProduct.price
      ? selectedProduct.discont_price
      : selectedProduct.price;

  const hasDiscount = price !== selectedProduct.price;

  return (
    <PageWrapper>
      <div className={s.productPage}>
        <div className={s.productImg}>
          <img
            className={s.img}
            src={`${BASE_URL}${selectedProduct.image}`}
            alt={selectedProduct.title}
          />
        </div>
        <div className={s.productInfo}>
          <h2 className={s.title}>{selectedProduct.title}</h2>
          <div className={s.prices}>
            <span className={s.defaultPrice}>${price}</span>
            {hasDiscount && (
              <span className={s.oldPrice}>${selectedProduct.price}</span>
            )}
            <DiscountPercent
              price={selectedProduct.price}
              discont_price={price}
            />
          </div>
          <div className={s.btns}>
            <Counter
              className={s.counter}
              value={quantity}
              onChange={(value) => {
                if (selectedProduct) {
                  dispatch(
                    setProductQuantity({
                      productId: selectedProduct.id,
                      quantity: value,
                    }),
                  );
                }
              }}
            />
            <Button
              fullWidth
              type='button'
              onClick={() => {
                if (selectedProduct) {
                  dispatch(addToCart(selectedProduct, quantity));
                }
              }}
            >
              Add to cart
            </Button>
          </div>
          <div className={s.productDescription}>
            <span className={s.descriptionTitle}>Description</span>
            <p className={s.productDescription}>
              {selectedProduct.description}
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductPage;
