import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categoriesSlice';
import cartSlice from './reducers/cartSlice';
import productsSlice from './reducers/productsSlice';

const rootReducer = combineReducers({
  categories: categoriesSlice,
  cart: cartSlice,
  products: productsSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
