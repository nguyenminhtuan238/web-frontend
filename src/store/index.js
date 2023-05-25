import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import hidden from './hidden';
import User from './auth';
const reducer = combineReducers({
  hidden,
  User,
});
const store = configureStore({
  reducer,
});
export default store;
