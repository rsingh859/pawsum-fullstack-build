import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";
import persistedReducer from "./reducers/root-reducers";

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const persistedStore = persistStore(store);
