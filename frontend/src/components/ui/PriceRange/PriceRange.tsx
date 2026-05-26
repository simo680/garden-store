import Input from '../Input/Input';

import type { PriceRangeProps } from './PriceRange.props';

import s from './PriceRange.module.scss';

const parsePrice = (value: string): number | '' => {
  const digits = value.replace(/\D/g, '');

  return digits === '' ? '' : Number(digits);
};

export const PriceRange = (props: PriceRangeProps) => {
  const { minPrice, maxPrice, onMinPriceChange, onMaxPriceChange } = props;

  return (
    <div className={s.priceRange}>
      <span className={s.title}>Price</span>
      <div className={s.inputs}>
        <Input
          className={s.input}
          min={0}
          placeholder='from'
          value={minPrice}
          onChange={(e) => onMinPriceChange(parsePrice(e.target.value))}
        />
        <Input
          className={s.input}
          min={0}
          placeholder='to'
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(parsePrice(e.target.value))}
        />
      </div>
    </div>
  );
};
