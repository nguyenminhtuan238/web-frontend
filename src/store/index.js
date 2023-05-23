import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import hidden from './hidden'
const reducer = combineReducers({
    hidden,
})
const store = configureStore({
  reducer,
})
export default store;