import { CategoriesList } from '../CategoriesList/CategoriesList';
import { LineButton } from '../ui/LineButton/LineButton';

import s from './Categories.module.scss';

const Categories = () => {
  return (
    <div className={s.categories}>
      <LineButton
        className={s.lineButton}
        title='Categories'
        titleButton='All Categories'
        path='/categories'
      />
      <CategoriesList limit={4} />
    </div>
  );
};

export default Categories;
