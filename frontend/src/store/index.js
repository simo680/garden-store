import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { categoriesReducer } from "./categoryReducer";
import { productListReducer } from "./productListReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  productList: productListReducer,
  cartList: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
