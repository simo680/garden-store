import s from './OrderSummary.module.scss';

const OrderSummary = () => {
  


  const items = 4;
  const total = 100;

  return (
    <div className={s.orderSummary}>
      <h2 className={s.title}>Order Details</h2>
      <h2 className={s.itemCount}>{items} items</h2>
      <div className={s.total}>
        <h2 className={s.totalTitle}>Total</h2>
        <p className={s.totalAmount}>${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
