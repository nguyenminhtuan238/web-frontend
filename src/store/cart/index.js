import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CartApi from '../../services/cart.services';
export const addcart = createAsyncThunk('cart/add', async (data) => {
  try {
    await CartApi.add(data);
    const res = await CartApi.get();
    return res.product_in_cart;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(' Cần phải Đăng Nhập mới thêm vào giỏ hàng');
    }
    if (error.response.status === 400) {
      throw new Error('Sản phẩm đã hết hàng');
    } else {
      console.log(error);
    }
  }
});
export const getcart = createAsyncThunk('cart/get', async () => {
  try {
    const res = await CartApi.get();
    return res.product_in_cart;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(' Cần phải Đăng Nhập mới thêm vào giỏ hàng');
    } else {
      console.log(error);
    }
  }
});
export const updatecart = createAsyncThunk('cart/update', async (data) => {
  try {
    await CartApi.updatesl(data);
    const res = await CartApi.get();
    return res.product_in_cart;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(' Cần phải Đăng Nhập mới thêm vào giỏ hàng');
    } else {
      console.log(error);
    }
  }
});
export const deletecart = createAsyncThunk('cart/delete', async (id) => {
  try {
    await CartApi.remove(id);
    const res = await CartApi.get();
    return res.product_in_cart;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(' Cần phải Đăng Nhập mới thêm vào giỏ hàng');
    } else {
      console.log(error);
    }
  }
});

const cart = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    isloading: true,
    err: null,
  },
  reducers: {},
  extraReducers: (builercart) => {
    builercart.addCase(addcart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builercart.addCase(addcart.rejected, (state, action) => {
      state.cart = null;
      state.err = action.error;
    });
    builercart.addCase(getcart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.isloading = false;
      state.err = null;
    });
    builercart.addCase(getcart.rejected, (state, action) => {
      state.cart = null;
      state.err = action.error;
    });
    builercart.addCase(updatecart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.isloading = false;
      state.err = null;
    });
    builercart.addCase(updatecart.rejected, (state, action) => {
      state.cart = null;
      state.err = action.error;
    });
    builercart.addCase(deletecart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.err = null;
    });
    builercart.addCase(deletecart.rejected, (state, action) => {
      state.
      state.err = action.error;
    });
  },
});
export default cart.reducer;
