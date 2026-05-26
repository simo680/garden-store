import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit';
import type { TCartProduct, TProduct } from '../../api/types';
import type { RootState } from '../store';

type TCartSlice = {
  products: TCartProduct[];
  totalCount: number;
  totalPrice: number;
};

export const initialState: TCartSlice = {
  products: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: {
      reducer(state, action: PayloadAction<TCartProduct>) {
        const existing = state.products.find((p) => p.id === action.payload.id);

        if (existing) {
          existing.quantity += action.payload.quantity;
        } else {
          state.products.push(action.payload);
        }
      },

      prepare(product: TProduct, quantity = 1) {
        const key = nanoid();
        return {
          payload: { ...product, key, quantity },
        };
      },
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (item) => item.key !== action.payload,
      );
    },

    clearCart(state) {
      state.products = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartQuantitySelector = (state: RootState): number =>
  state.cart.products.reduce(
    (total: number, item: TCartProduct) => total + item.quantity,
    0,
  );

export const cartSummarySelector = (state: RootState) => {
  const totalCount = state.cart.products.reduce(
    (total: number, item: TCartProduct) => total + item.quantity,
    0,
  );

  const totalPrice = state.cart.products.reduce(
    (total: number, item: TCartProduct) => total + item.price * item.quantity,
    0,
  );

  return { totalCount, totalPrice };
};

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
