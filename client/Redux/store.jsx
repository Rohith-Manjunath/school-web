import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import { myApi } from "./authApi";
import { adminApi } from "./adminAuth";
import UserSlice from "./UserSlice";
import GallerySlice from "./GallerySlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "gallery"],
};

const rootReducer = combineReducers({
  user: UserSlice,
  gallery: GallerySlice,
  [myApi.reducerPath]: myApi.reducer,
  [adminApi.reducerPath]: adminApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(myApi.middleware)
      .concat(adminApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
