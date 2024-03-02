import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./authApi";
import UserSlice from "./UserSlice";


// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "blogs"],
};

// Persisted reducer
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: UserSlice,
    [authApi.reducerPath]: authApi.reducer,
  })
);

// Create the persisted store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
});

setupListeners(store.dispatch);

// Persistor
export const persistor = persistStore(store);
