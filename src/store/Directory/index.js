import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductsAPI from '../../services/products.services';
export const getDirectory = createAsyncThunk('get/Directory', async () => {
  try {
    const res = await ProductsAPI.getDirectory();
    return res.category;
  } catch (error) {
    console.log(error);
  }
});
export const getnameDirectory = createAsyncThunk('get/SearchDirectory', async (id) => {
  try {
    const res = await ProductsAPI.searchidDiretory(id);
    return res.product?.items ? res.product.items : [];
  } catch (error) {
    console.log(error);
  }
});

const product = createSlice({
  name: 'product',
  initialState: {
    isloading: true,
    Product: [],
    Directory:[],
  },
  reducers: {},
  extraReducers: {
    [getDirectory.fulfilled]: (state, action) => {
      state.isloading = false;
      state.Directory = action.payload;
    },
    [getDirectory.rejected]: (state, action) => {
      state.isloading = true;
      state.Directory = [];
    },
    [getnameDirectory.pending]: (state, action) => {
      state.isloading = true;
      state.Product = [];
    },
    [getnameDirectory.fulfilled]: (state, action) => {
      state.isloading = false;
      state.Product = action.payload;
    },
    [getnameDirectory.rejected]: (state, action) => {
      state.isloading = true;
      state.Product = [];
    }
    
  },
});
export default product.reducer;
