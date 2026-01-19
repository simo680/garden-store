import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { TCategory } from '../../api/types';
import { getCategories } from '../../api/categories';

type TCategoriesSlice = {
  categories: Array<TCategory>;
  isLoading: boolean;
  error: string | null;
};

const getAllCategories = createAsyncThunk<TCategory[], void>(
  'categories/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await getCategories();

      return responce;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('An unknown error occurred');
    }
  },
);

export const initialState: TCategoriesSlice = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
