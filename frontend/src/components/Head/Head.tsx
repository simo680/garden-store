import Button from '../ui/Button/Button';

import s from './Head.module.scss';

const Head = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Amazing Discounts on Garden Products!</h1>
      <Button className={s.button}>Check out</Button>
    </div>
  );
};

export default Head;
