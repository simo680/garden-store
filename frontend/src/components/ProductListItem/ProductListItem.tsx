import type { MouseEvent } from 'react';

import Button from '../ui/Button/Button';
import { DiscountPercent } from '../DiscountPercent/DiscountPercent';

import type { ProductItemProps } from './ProductListItem.props';

import s from './ProductListItem.module.scss';

export const ProductItem = (props: ProductItemProps) => {
  const { imgSrc, title, price, oldPrice, onActionClick } = props;

  const handleActionClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (onActionClick) {
      onActionClick(event);
    }
  };

  return (
    <div className={s.productItem}>
      <div className={s.imgWrapper}>
        <img className={s.img} src={imgSrc} alt={title} />

        {oldPrice && (
          <DiscountPercent
            className={s.discountPercent}
            price={oldPrice}
            discont_price={price}
          />
        )}

        <Button
          className={s.actionButton}
          type='button'
          appearance='primary'
          onClick={handleActionClick}
        >
          Add to cart
        </Button>
      </div>

      <div className={s.info}>
        <span className={s.title}>{title}</span>
        <div className={s.prices}>
          <span className={s.price}>${price}</span>
          {oldPrice !== undefined ? (
            <span className={s.oldPrice}>${oldPrice}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
