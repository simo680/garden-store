import { createSlice } from "@reduxjs/toolkit";

type TOrderSlice = {};

export const initialState: TOrderSlice = {};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
