import { createSlice } from '@reduxjs/toolkit';

type TSaleSlice = {};

export const initialState: TSaleSlice = {};

export const saleSlice = createSlice({
  name: 'sale',
  initialState,
  reducers: {},
});

export default saleSlice.reducer;
