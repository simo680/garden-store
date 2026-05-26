import EmptyBasket from '../../components/EmptyBasket/EmptyBakset';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { LineButton } from '../../components/ui/LineButton/LineButton';

import s from './BasketPage.module.scss'

const BasketPage = () => {
  return (
    <PageWrapper>
      <LineButton
        className={s.lineButton}
        title='Shopping Cart'
        titleButton='Back to the store'
        path='/products'
      />
      {/* <EmptyBasket /> */}
      <div>
        {/* OrderList не сделано еще */}
        <OrderDetails />
      </div>
    </PageWrapper>
  );
};

export default BasketPage;
