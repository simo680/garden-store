import LineButton from '../ui/LineButton/LineButton';

import s from './Categories.module.scss';

const Categories = () => {
  return (
    <div className={s.categories}>
      <LineButton
        title='Categories'
        titleButton='All Categories'
        path='/categories'
      />
      {/* <ul className={s.list}>
          <li key={category.id}>
            <img src={category.img} alt={category.title} />
            <h3>{category.title}</h3>
          </li>
      </ul> */}
    </div>
  );
};

export default Categories;
