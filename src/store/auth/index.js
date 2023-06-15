import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthApi from '../../services/auth.services';
import { Storagekey, Userkey,StorageAdminkey} from '../../unilt/key';
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

export const LoginAdmin = createAsyncThunk('admin/login', async (payload) => {
  try {
    const res = await AuthApi.Loginadmin(payload);
    localStorage.setItem(StorageAdminkey, res.token);
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
export const updateif = createAsyncThunk('update/if', async (payload) => {
  try {
    const res = await AuthApi.update(payload);
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
    User: JSON.parse( localStorage.getItem(Userkey)) || null,
    error: {},
    admin:localStorage.getItem(StorageAdminkey)||null
  },
  reducers: {
    Logout: (state) => {
      localStorage.removeItem(Storagekey);
      localStorage.removeItem(Userkey);
      localStorage.removeItem(StorageAdminkey);
      state.admin=null
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
    [LoginAdmin.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [LoginAdmin.fulfilled]: (state) => {
      state.admin = localStorage.getItem(StorageAdminkey);
    },
    [RegisterUser.rejected]: (state, action) => {
      state.User = null;

      state.error = action.error.message;
    },
    [updateif.fulfilled]: (state, action) => {
      state.User = action.payload;
    },
    [updateif.rejected]: (state, action) => {
      state.User = null;

      state.error = action.error.message;
    },
  },
});
export const { Logout } = User.actions;
export default User.reducer;
