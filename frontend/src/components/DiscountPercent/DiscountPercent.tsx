import clsx from 'clsx';
import type { DiscountPercentProps } from './DiscountPercent.props';

import s from './DiscountPercent.module.scss';

export const DiscountPercent = (props: DiscountPercentProps) => {
  const { price, discont_price, className } = props;

  const discountPercent = Math.round(((price - discont_price) / price) * 100);
  const positivePercent = Math.abs(discountPercent);

  if (positivePercent === 0) {
    return null;
  }

  return (
    <div className={clsx(s.percentNumber, className)}>-{positivePercent}%</div>
  );
};
