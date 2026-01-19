import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { TCategory, TProduct } from '../../api/types';
import { fetchAllProducts } from '../../api/products';
import { getCategoryById } from '../../api/categories';

const getByIdProducts = createAsyncThunk<TCategory, number>(
  'categories/getById',
  async (id, { rejectWithValue }) => {
    try {
      const responce = await getCategoryById(id);

      const category = responce;

      if (!category) {
        return rejectWithValue('Category not found');
      }

      return category;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('An unknown error occurred');
    }
  },
);

const getAllProducts = createAsyncThunk<TProduct[], void>(
  'products/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await fetchAllProducts();
      return responce;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('An unknown error occurred');
    }
  },
);

export const getDiscountProducts = createAsyncThunk<TProduct[], void>(
  'products/getDiscount',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAllProducts();
      return response.filter(
        (product) =>
          product.discount_price && product.discount_price < product.price,
      );
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('An unknown error occurred');
    }
  },
);

const getByIdProducts = createAsyncThunk<TProduct, number>(
  'products/getById',
  async (id, { rejectWithValue }) => {
    try {
      const responce = await fetchAllProducts();

      const product = responce.find((prod) => prod.id === id);

      if (!product) {
        return rejectWithValue('Product not found');
      }

      return product;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('An unknown error occurred');
    }
  },
);

type TProductsSlice = {
  allProducts: TProduct[];
  discountProducts: TProduct[];
  categoryProducts: Record<number, TProduct[]>;
  selectedProduct: TProduct | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: TProductsSlice = {
  allProducts: [],
  discountProducts: [],
  categoryProducts: {},
  selectedProduct: null,
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get all products
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allProducts = action.payload;
      });

    // Get discount products
    builder
      .addCase(getDiscountProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDiscountProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(getDiscountProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.discountProducts = action.payload;
      });

    // Get category products

    builder
      .addCase(getByIdCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getByIdCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getByIdCategories.fulfilled, (state, action) => {
        state.isLoading = false;
      });

    // Get product by ID
    builder
      .addCase(getByIdProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getByIdProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(getByIdProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedProduct = action.payload;
      });
  },
});

export default productsSlice.reducer;
