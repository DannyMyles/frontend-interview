import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/users.model";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const ussApi = createApi({
  //You can name the reducerPath same as the
  reducerPath: "campaignsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
});
