import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/userApi";

export const store = configureStore({
    //Adding reducer
    reducer: {
      [usersApi.reducerPath]: campaignsApi.reducer,
    },
    // Adding midleware for caching of the server data
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck: false}).concat(campaignsApi.middleware),
  });
  