import { BASE_URL } from ".././index";
import { getAllCategoriesAction } from "../store/categoryReducer"

export function fetchCategoriesList(){
  return function(dispatch) {
    fetch(BASE_URL + '/categories/all')
      .then(res => res.json())
      .then(data => dispatch(getAllCategoriesAction(data)));
  }
}