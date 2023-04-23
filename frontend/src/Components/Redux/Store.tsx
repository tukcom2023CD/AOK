import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//localStorage에 저장

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers(
  userReducer
);

export default persistReducer(persistConfig, rootReducer); 