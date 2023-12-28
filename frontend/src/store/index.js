import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { categoriesReducer } from "./categoryReducer";
import { productListReducer } from "./productListReducer";
import { basketReducer } from "./basketReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  productList: productListReducer,
  basketList: basketReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
