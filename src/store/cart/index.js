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
    if (error.response.status === 400) {
      throw new Error(' Cần phải Giỏ Hàng rỗng');
    }if(error.response.status === 404){
      throw new Error(' Cần phải Đăng Nhập mới thêm vào giỏ hàng');

    }
     else {
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
export const CartAddress = createAsyncThunk('cart/CartAddress', async (data) => {
  try {
      await CartApi.cartAddress(data);
    const res = await CartApi.get();

    return res.product_in_cart
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(' Cần phải Đăng Nhập mới thêm vào giỏ hàng');
    } else {
      console.log(error);
    }
  }
});
export const Checkout = createAsyncThunk('cart/checkout', async (data) => {
  try {
    await CartApi.Checkout(data);
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
    Check:false
  },
  reducers: {},
  extraReducers: (builercart) => {
    builercart.addCase(addcart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builercart.addCase(addcart.rejected, (state, action) => {
      state.cart = [];
      state.err = action.error;
    });
    builercart.addCase(getcart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.isloading = false;
      state.err = null;
    });
    builercart.addCase(getcart.rejected, (state, action) => {
      state.cart = [];
      state.isloading=false
      state.err = action.error;
    });
    builercart.addCase(updatecart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.isloading = false;
      state.err = null;
    });
    builercart.addCase(updatecart.rejected, (state, action) => {
      state.err = action.error;
    });
    builercart.addCase(deletecart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.err = null;
    });
    builercart.addCase(deletecart.rejected, (state, action) => {
      state.err = action.error;
    });
    builercart.addCase(CartAddress.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.err = null;
    });
    builercart.addCase(CartAddress.rejected, (state, action) => {
      state.err = action.error;
    });
    builercart.addCase(Checkout.fulfilled, (state, action) => {
      state.cart = [];
      state.Check = true;
      state.err = null;
    });
    builercart.addCase(Checkout.rejected, (state, action) => {
      state.err = action.error;
    });
  },
});
export default cart.reducer;
