import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//localStorage에 저장

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;