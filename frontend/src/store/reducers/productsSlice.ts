import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TProduct, TCategoryWithProducts } from '../../api/types';
import { fetchAllProducts } from '../../api/products';
import { getCategoryById } from '../../api/categories';

export const getByIdCategories = createAsyncThunk<
  TCategoryWithProducts,
  number
>('categories/getById', async (id, { rejectWithValue }) => {
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
});

export const getAllProducts = createAsyncThunk<TProduct[], void>(
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
          product.discont_price && product.discont_price < product.price,
      );
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('An unknown error occurred');
    }
  },
);

export const getByIdProduct = createAsyncThunk<TProduct, number>(
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
  selectedCategory: TCategoryWithProducts | null;
  productQuantities: Record<number, number>;
  isLoading: boolean;
  error: string | null;
};

const initialState: TProductsSlice = {
  allProducts: [],
  discountProducts: [],
  categoryProducts: {},
  selectedProduct: null,
  selectedCategory: null,
  productQuantities: {},
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductQuantity(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>,
    ) {
      const normalized = Math.max(1, action.payload.quantity);
      state.productQuantities[action.payload.productId] = normalized;
    },
  },
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
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(getByIdCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCategory = action.payload;
      });

    // Get product by ID
    builder
      .addCase(getByIdProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getByIdProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(getByIdProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedProduct = action.payload;
      });
  },
});

export const { setProductQuantity } = productsSlice.actions;

export default productsSlice.reducer;
