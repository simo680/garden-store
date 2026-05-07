import EmptyBasket from '../../components/EmptyBasket/EmptyBakset';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { LineButton } from '../../components/ui/LineButton/LineButton';

const BasketPage = () => {
  return (
    <PageWrapper>
      <LineButton
        title='Shopping Cart'
        titleButton='Back to the store'
        path='/products'
      />
      <EmptyBasket />
      <div>
        {/* OrderList не сделано еще */}
        <OrderDetails />
      </div>
    </PageWrapper>
  );
};

export default BasketPage;
