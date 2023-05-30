import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import hidden from './hidden';
import User from './auth';
import products from './products';
const reducer = combineReducers({
  hidden,
  User,
  products,
});
const store = configureStore({
  reducer,
});
export default store;
