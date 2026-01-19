import { postDiscountForm } from "../../utils/discount";
import ContactForm from "../ContactForm/ContactForm";

import s from "./DiscountBanner.module.scss";

import hands from "./images/hands.png";

const DiscountBanner = () => {
  return (
    <div className={s.banner}>
      <h2 className={s.title}>5% off on the first order</h2>
      <div className={s.content}>
        <img
          src={hands}
          alt="Руки держат садовые принадлежности вверх и растение"
        />
        <div className={s.form}>
          <ContactForm
            appearance="secondary"
            fetch={async (data) => {
              await postDiscountForm(data);
            }}
            buttonTitle="Get a discount"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
