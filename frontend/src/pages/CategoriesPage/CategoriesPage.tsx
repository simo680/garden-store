import { CategoriesList } from '../../components/CategoriesList/CategoriesList';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

const CategoriesPage = () => {
  return (
    <PageWrapper title={'Categories'}>
      <CategoriesList/>
    </PageWrapper>
  );
};

export default CategoriesPage;
