import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import ProjectReducer from './ProjectSlice'; 
import BranchReducer from './BranchSlice'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//localStorage에 저장

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'project', 'branch']
};

const rootReducer = combineReducers({
  user: userReducer,
  project: ProjectReducer,
  branch: BranchReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;