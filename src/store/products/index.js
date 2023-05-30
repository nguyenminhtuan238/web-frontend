import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import ProductsAPI from '../../services/products.services';
export const getpd=createAsyncThunk("get/product",async ()=>{
    try {
        const res= await ProductsAPI.getpd()
        return res.product.items
    } catch (error) {
        console.log(error)
    }
})
const product = createSlice({
  name: 'product',
  initialState: {
    isloading:true,
    Product:null,
  },
  reducers: {},
  extraReducers:{
    [getpd.fulfilled]: (state, action) => {
        state.isloading=false
        state.Product = action.payload;
    },
  }
});

export default product.reducer;
