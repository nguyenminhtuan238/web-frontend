import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import OrderAPI from '../../services/order.services';
export const GetOrder = createAsyncThunk('get/Order', async () => {
  try {
    const res = await OrderAPI.getorder();
    console.log(res)
    return res.orders;
  } catch (error) {
    console.log(error);
  }
});

const product = createSlice({
  name: 'product',
  initialState: {
    isloading: true,
    Order: [],
    error:null
  },
  reducers: {},
  extraReducers: {
    [GetOrder.fulfilled]: (state, action) => {
      state.isloading = false;
      state.Order = action.payload;
    },
    [GetOrder.rejected]: (state, action) => {
      state.isloading = false;
      state.Order = [];
      
    },
  
  },
});
export const { setloading } = product.actions;
export default product.reducer;
