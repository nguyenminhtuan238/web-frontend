import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import ProductsAPI from '../../services/products.services';
export const getpd=createAsyncThunk("get/product",async (page)=>{
    try {
        const res= await ProductsAPI.getpd(page)
        return res
    } catch (error) {
        console.log(error)
    }
})
export const getid=createAsyncThunk("get/product/id",async (id)=>{
  try {
      const res= await ProductsAPI.getid(id)
      return res.product
  } catch (error) {
      console.log(error)
  }
})
const product = createSlice({
  name: 'product',
  initialState: {
    isloading:true,
    Product:null,
    getpage:null,
  },
  reducers: {
      setloading:(state)=>{
        state.isloading=true
      }
  },
  extraReducers:{
    [getpd.fulfilled]: (state, action) => {
        state.isloading=false
        state.Product = action.payload.product.items;
        state.getpage=action.payload.totalPage
    },
    [getid.fulfilled]: (state, action) => {
      state.isloading=false
      state.Product = action.payload;
  },
  }
});
export const {setloading}=product.actions
export default product.reducer;
