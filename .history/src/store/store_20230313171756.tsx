import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services

export const store = configureStore({
  //Adding reducer
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  // Adding midleware for caching of the server data
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
});
