import Button from '../ui/Button/Button';

import s from './EmptyBasket.module.scss';

const EmptyBasket = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>
        Looks like you have no items in your basket currently.
      </p>
      <Button className={s.button} appearance='primary'>
        Go Shopping
      </Button>
    </div>
  );
};

export default EmptyBasket;
