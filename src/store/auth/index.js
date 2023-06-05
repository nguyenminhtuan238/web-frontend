import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthApi from '../../services/auth.services';
import { Storagekey, Userkey} from '../../unilt/key';
export const LoginUser = createAsyncThunk('user/login', async (payload) => {
  try {
    const res = await AuthApi.Login(payload);
    localStorage.setItem(Storagekey, res.token);
    localStorage.setItem(Userkey, JSON.stringify(res.customer_info));
    return res.customer_info;
  } catch (error) {
    if (error.response.status === 401) {
      // console.log(JSON.stringify(error.response.data.message))
      throw error.response.data.message;
    }
    if (error.response.status === 402) {
      throw error.response.data.message;
    } else {
      console.log(error);
    }
    //throw error
  }
});

export const RegisterUser = createAsyncThunk(
  'user/register',
  async (payload) => {
    try {
      await AuthApi.register(payload);
    } catch (error) {
      if (error?.response.status === 400) {
        console.log(error);
        throw error.response.data.message;
      } else {
        console.log(error);
      }
    }
  }
);
const User = createSlice({
  name: 'User',
  initialState: {
    User: localStorage.getItem(Userkey) || null,
    error: {},
  },
  reducers: {
    Logout: (state) => {
      localStorage.removeItem(Storagekey);
      localStorage.removeItem(Userkey);
      state.User = null;
    },
  },
  extraReducers: {
    [LoginUser.fulfilled]: (state, action) => {
      state.User = action.payload;
    },
    [RegisterUser.fulfilled]: (state, action) => {
      state.User = null;
    },
    [LoginUser.rejected]: (state, action) => {
      state.User = null;

      state.error = action.error.message;
    },
    [RegisterUser.rejected]: (state, action) => {
      state.User = null;

      state.error = action.error.message;
    },
  },
});
export const { Logout } = User.actions;
export default User.reducer;
