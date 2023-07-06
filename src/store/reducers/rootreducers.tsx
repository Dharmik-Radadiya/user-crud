import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import validateReducer from "./validate";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const appReducer = combineReducers({
  user: userReducer,
  validate: validateReducer,
});

/**
 * A function that acts as the root reducer for the application state.
 *
 * @param {any} state - The current state of the application.
 * @param {any} action - The action being dispatched.
 * @return {any} The updated state after the action has been applied.
 */
const rootReducer = (state: any, action: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
