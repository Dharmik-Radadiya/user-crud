import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistedReducer from "./reducers/rootreducers";

export const store = configureStore({
  reducer: persistedReducer,

  /**
   * A middleware function that takes getDefaultMiddleware as a parameter
   * and returns the result of calling getDefaultMiddleware with an object
   * with the serializableCheck property set to false.
   *
   * @param {function} getDefaultMiddleware - a function that returns the
   * default middleware for Redux
   * @return {Array} an array containing the default middleware with the
   * serializableCheck property set to false
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistData = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
