import { useEffect } from 'react';
import { Link } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllCategories } from '../../store/reducers/categoriesSlice';

import type { CategoriesListProps } from './СategoriesList.props';

import { BASE_URL } from '../../api/apiRequest';

import s from './CategoriesList.module.scss';

export const CategoriesList = (props: CategoriesListProps) => {
  const { limit } = props;

  const dispatch = useAppDispatch();

  const categories = useAppSelector((state) => state.categories.categories);

  const displayedCategories = limit ? categories.slice(0, limit) : categories;

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {displayedCategories.map((category) => (
        <li key={category.id}>
          <Link to={`/categories/${category.id}`}>
            <img
              className={s.img}
              src={`${BASE_URL}${category.image}`}
              alt={category.title}
            />
            <h3 className={s.title}>{category.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
