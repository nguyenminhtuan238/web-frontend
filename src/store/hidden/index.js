import { createSlice } from '@reduxjs/toolkit';

const clice = createSlice({
  name: 'hidden',
  initialState: {
    isSearch: false,
    modal: false,
    changscroll: false,
    isVisible: false,
  },
  reducers: {
    setmodal: (state) => {
      state.modal = !state.modal;
    },
    setIsSearch: (state) => {
      state.isSearch = !state.isSearch;
    },
    setScroll: (state, action) => {
      state.changscroll = action.payload;
    },
    setIsVisible: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});
export const { setIsSearch, setmodal, setScroll, setIsVisible } = clice.actions;
export default clice.reducer;
