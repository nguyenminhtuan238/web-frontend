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
const product = createSlice({
  name: 'product',
  initialState: {
    isloading:true,
    Product:null,
    getpage:null
  },
  reducers: {},
  extraReducers:{
    [getpd.fulfilled]: (state, action) => {
        state.isloading=false
        state.Product = action.payload.product.items;
        state.getpage=action.payload.totalPage
    },
  }
});

export default product.reducer;
