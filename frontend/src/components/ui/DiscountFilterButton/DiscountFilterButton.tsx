import Input from '../Input/Input';

import s from './DiscountFilterButton.module.scss';

import type { DiscountFilterButtonProps } from './DiscountFilterButton.props';

export const DiscountFilterButton = (props: DiscountFilterButtonProps) => {
  const { isActive, onToggle } = props;

  return (
    <div className={s.discountFilter}>
      <label htmlFor='discount-filter'>Discounted items</label>
      <div className={s.checkboxWrapper}>
        <Input
          className={s.input}
          id='discount-filter'
          type='checkbox'
          checked={isActive}
          onChange={() => onToggle()}
        />
      </div>
    </div>
  );
};
