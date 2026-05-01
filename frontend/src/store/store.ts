import { configureStore, createSlice } from '@reduxjs/toolkit';

const dummySlice = createSlice({
  name: 'dummy',
  initialState: {},
  reducers: {},
});

const store = configureStore({
  reducer: {
    dummy: dummySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
