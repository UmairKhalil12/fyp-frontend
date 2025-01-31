import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import cameraReducer from "./cameraSlice";

const persistConfig = {
  key: "persist-store",
  storage,
};

const reducer = combineReducers({
  user: userReducer,
  camera: cameraReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
