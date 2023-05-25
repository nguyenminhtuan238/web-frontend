import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import AuthApi from '../../services/auth.services';
export const LoginUser=createAsyncThunk("user/login",async (payload)=>{
    const res=await AuthApi.Login(payload)
    console.log(res)
    return res
})
const user = createSlice({
  name: 'User',
  initialState: {
    User:  {},
  },
  reducers: {
  },
  extraReducers:{
      [LoginUser.fulfilled]:(state,action)=>{
          state.user=action.payload
      }
  }
  
});
export default user.reducer;
