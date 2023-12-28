import s from "./Categories.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoriesList } from "../../asyncActions/categories";
import { Link } from "react-router-dom";

import { BASE_URL } from "../..";
function Categories({ length }) {
  const categories = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories.length) {
      console.log("Fetching categories...");
      dispatch(fetchCategoriesList());
    }
  }, [categories, dispatch]);

  console.log("Categories in component:", categories);

  return (
    <div className={s.categories}>
      <div className={s.category_list}>
        {categories.slice(0, length).map((elem) => (
          <Link
            className={s.category}
            key={elem.id}
            to={"/categories/" + elem.id}
          
          >
            <div>
              <div
                style={{
                  background: `url(${BASE_URL}${elem.image}) no-repeat center center / cover`,
                }}
                className={s.category_image}
              ></div>
              <p className={s.category_name}>{elem.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Categories;
