import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductsAPI from '../../services/products.services';
export const getpd = createAsyncThunk('get/product', async (page) => {
  try {
    const res = await ProductsAPI.getpd(page);
    return res;
  } catch (error) {
    console.log(error);
  }
});
export const getid = createAsyncThunk('get/product/id', async (id) => {
  try {
    const res = await ProductsAPI.getid(id);
    return res.product;
  } catch (error) {
    console.log(error);
  }
});
export const search = createAsyncThunk('get/search/id', async (values) => {
  try {
    const res = await ProductsAPI.search(values);
    return res.product?.items?res.product?.items:[];
  } catch (error) {
    if(error.response.status===404){
      throw new Error("Phai co gia tri")
    }else{
      console.log(error)
    }
  } 
});
const product = createSlice({
  name: 'product',
  initialState: {
    isloading: true,
    Product: [],
    getpage: 1,
    loadingid: true,
    isloadingSearch:true,
    Search:[],
    error:null
  },
  reducers: {
    setloading: (state) => {
      state.isloading = true;
      state.loadingid = true;
    },
  },
  extraReducers: {
    [getpd.fulfilled]: (state, action) => {
      state.isloading = false;
      state.loadingid = true;
      state.Product = action.payload.product.items;
      state.getpage = action.payload.totalPage;
    },
    [getpd.rejected]: (state, action) => {
      state.isloading = true;
      state.loadingid = true;
      state.Product = [];
      state.getpage = 1;
    },
    [getid.fulfilled]: (state, action) => {
      state.loadingid = false;
      state.isloading = true;
      state.Product = action.payload;
    },
    [search.fulfilled]: (state, action) => {
      state.isloadingSearch=false;
      state.Search = action.payload;
    },
    [search.rejected]: (state, action) => {
      state.Search=[]
      state.error = action.error;
    },
  },
});
export const { setloading } = product.actions;
export default product.reducer;
