import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//localStorage에 저장

const persistConfig = {
  key: 'root',
  storage,
  whitelist: userReducer,
};

const rootReducer = combineReducers(
  userReducer
);

const store = configureStore({
  reducer: rootReducer,
});

export default store;