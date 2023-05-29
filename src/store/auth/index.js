import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthApi from '../../services/auth.services';
import { Storagekey } from '../../unilt/key';
export const LoginUser = createAsyncThunk('user/login', async (payload) => {

    try {
      const res = await AuthApi.Login(payload);
    localStorage.setItem(Storagekey, res.token);
    return res.customer_info  
    } catch (error) {
        
      if(error.response.status === 401){
        // console.log(JSON.stringify(error.response.data.message))
        throw error.response.data.message
      }else{
        console.log(error)
      }
      //throw error
    }
});

export const RegisterUser = createAsyncThunk(
  'user/registe',
  async (payload) => {
    try {
      const res = await AuthApi.register(payload);
      console.log(res);
      return res.customer_info
    } catch (error) {
      if (error?.response.status === 400) {
      throw error.response.data.message
      } else {
        console.log(error);
      }
    }
  }
);
const User = createSlice({
  name: 'User',
  initialState: {
    User: localStorage.getItem(Storagekey)|| null,
    error: {},
  },
  reducers: {
    Logout: (state) => {
      localStorage.removeItem(Storagekey)
      state.User = null;
    },
  },
  extraReducers: {
    [LoginUser.fulfilled]: (state, action) => {
      state.User = action.payload;
    },
    [RegisterUser.fulfilled]: (state, action) => {
      state.User = action.payload;
    },
    [LoginUser.rejected]: (state, action) => {
      
      state.User = null;
      
      state.error=action.error.message
    },
    [RegisterUser.rejected]: (state, action) => {
      state.User = null;
      
      state.error=action.error.message
    },
  },
});
export const {Logout } = User.actions;
export default User.reducer;
