import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import { myApi } from "./authApi";
import { adminApi } from "./adminAuth";
import UserSlice from "./UserSlice";



// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user","admin"],
};

// Persisted reducer
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: UserSlice,
    [myApi.reducerPath]: myApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  })
);

// Create the persisted store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(myApi.middleware).concat(adminApi.middleware)
});

setupListeners(store.dispatch);

// Persistor
export const persistor = persistStore(store);
