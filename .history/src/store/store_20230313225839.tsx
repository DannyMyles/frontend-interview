import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/userApi";

export const store = configureStore({
    //Adding reducer
    reducer: {
      [userApi.reducerPath]: userApi.reducer,
    },
    // Adding midleware for caching of the server data
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck: false}).concat(usersApi.middleware),
  });
  