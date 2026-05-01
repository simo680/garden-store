import Categories from '../../components/Categories/Categories';
import DiscountBanner from '../../components/DiscountBanner/DiscountBanner';
import Head from '../../components/Head/Head';

const HomePage = () => {
  return (
    <div>
      <Head />
      <Categories />
      <DiscountBanner />
    </div>
  );
};

export default HomePage;
