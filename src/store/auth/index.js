import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthApi from '../../services/auth.services';
import { Storagekey } from '../../unilt/key';
export const LoginUser = createAsyncThunk('user/login', async (payload) => {
  try {
    const res = await AuthApi.Login(payload);
    localStorage.setItem(Storagekey, res.token);
  } catch (error) {
    if (error?.response.status === 401) {
      alert('Tai khoan mat khau sai');
    } else {
      console.log(error);
    }
  }
});
export const RegisterUser = createAsyncThunk(
  'user/registe',
  async (payload) => {
    try {
      const res = await AuthApi.register(payload);
      console.log(res);
    } catch (error) {
      if (error?.response.status === 400) {
        alert('Tai khoan mat khau sai');
      } else {
        console.log(error);
      }
    }
  }
);
const User = createSlice({
  name: 'User',
  initialState: {
    User: {},
    error: '',
  },
  reducers: {},
  extraReducers: {
    [LoginUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});
export default User.reducer;
