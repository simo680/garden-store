import s from "./CongratulationModal.module.scss";

const CongratulationModal = () => {
  return (
    <div className={s.modal}>
      <h2 className={s.title}>Congratulations!</h2>
      <p className={s.text}>
        Your order has been successfully placed on the website.
      </p>
      <p className={s.text}>
        A manager will contact you shortly to confirm your order.
      </p>
    </div>
  );
};

export default CongratulationModal;
