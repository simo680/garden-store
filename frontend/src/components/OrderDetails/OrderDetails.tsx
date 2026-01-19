import { postOrder } from "../../utils/order";
import ContactForm from "../ContactForm/ContactForm";
import OrderSummary from "../OrderSummary/OrderSummary";

import s from "./OrderDetails.module.scss";

const OrderDetails = () => {
  return (
    <div className={s.container}>
      <OrderSummary />
      <ContactForm
        appearance="primary"
        fetch={async (data) => {
          await postOrder(data);
        }}
        buttonTitle="Order"
      />
    </div>
  );
};

export default OrderDetails;
