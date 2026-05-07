import { Link } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import LineButton from '../ui/LineButton/LineButton';

import s from './Categories.module.scss';
import { useEffect } from 'react';
import { getAllCategories } from '../../store/reducers/categoriesSlice';
import { API_URL } from '../../main';

type CategoriesProps = {
  limit?: number; // если не передать, покажет все
  showAllButton?: boolean; // можно включить/выключить кнопку "All Categories"
};

const Categories = ({ limit, showAllButton = true}) => {
  const dispatch = useAppDispatch();

  const categories = useAppSelector((state) => state.categories.categories);

  const displayedCategories = limit ? categories.slice(0, limit) : categories;

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  console.log(categories);

  return (
    <div className={s.categories}>
      <LineButton
        title='Categories'
        titleButton='All Categories'
        path='/categories'
      />
      <ul className={s.list}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>
              <img className={s.img} src={`${API_URL}${category.image}`} alt={category.title} />
              <h3>{category.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
