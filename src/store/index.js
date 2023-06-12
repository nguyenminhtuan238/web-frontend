import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import hidden from './hidden';
import User from './auth';
import products from './products';
import cart from './cart';
import Art from './Article';
const reducer = combineReducers({
  hidden,
  User,
  products,
  cart,
  Art,
});
const store = configureStore({
  reducer,
});
export default store;
