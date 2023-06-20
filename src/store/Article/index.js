import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ArtApi from '../../services/article.services';
export const addArt = createAsyncThunk('Art/add', async (data) => {
  try {
    await ArtApi.add(data);
    const res = await ArtApi.get();
    return res.result;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(' Cần phải Đăng Nhập ');
    } else {
      console.log(error);
    }
  }
});
export const getArt = createAsyncThunk('Art/get', async () => {
  try {
    const res = await ArtApi.get();
    return res.result;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(' Cần phải Đăng Nhập ');
    } else {
      console.log(error);
    }
  }
});
export const getidArt = createAsyncThunk('Art/getid', async (id) => {
  try {
    const res = await ArtApi.getid(id);
    return res.result;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(' Cần phải Đăng Nhập ');
    } else {
      console.log(error);
    }
  }
});
export const updateArt = createAsyncThunk('Art/update', async (data) => {
  try {
    await ArtApi.update(data);
    const res = await ArtApi.get();
    return res.result;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(' Cần phải Đăng Nhập ');
    } else {
      console.log(error);
    }
  }
});
export const deleteArt = createAsyncThunk('Art/delete', async (id) => {
  try {
    await ArtApi.remove(id);
    const res = await ArtApi.get();
    return res.result;
  } catch (error) {
    if (error.response.status === 401) {
      console.log(error.response);
      throw new Error(' Cần phải Đăng Nhập mới xóa được');
    } else {
      console.log(error);
    }
  }
});

const Art = createSlice({
  name: 'Art',
  initialState: {
    Arts: [],
    isloading: true,
    err: null,
    loadingArt: true,
    Art: {},
  },
  reducers: {},
  extraReducers: (builerArt) => {
    builerArt.addCase(addArt.fulfilled, (state, action) => {
      state.Arts = action.payload;
    });
    builerArt.addCase(addArt.rejected, (state, action) => {
      state.Arts = null;
      state.err = action.error;
    });
    builerArt.addCase(getArt.fulfilled, (state, action) => {
      state.Arts = action.payload;
      state.isloading = false;
      state.err = null;
    });
    builerArt.addCase(getArt.rejected, (state, action) => {
      state.Arts = [];
      state.err = action.error;
    });
    builerArt.addCase(getidArt.fulfilled, (state, action) => {
      state.Art = action.payload;
      state.loadingArt = false;
      state.err = null;
    });
    builerArt.addCase(getidArt.rejected, (state, action) => {
      state.Art = [];
      state.err = action.error;
    });
    builerArt.addCase(updateArt.fulfilled, (state, action) => {
      state.Arts = action.payload;
      state.isloading = false;
      state.err = null;
    });
    builerArt.addCase(updateArt.rejected, (state, action) => {
      state.Arts = null;
      state.err = action.error;
    });
    builerArt.addCase(deleteArt.fulfilled, (state, action) => {
      state.Arts = action.payload;
      state.err = null;
    });
    builerArt.addCase(deleteArt.rejected, (state, action) => {
      state.err = action.error;
    });
  },
});
export default Art.reducer;
