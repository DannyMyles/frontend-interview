import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/users.model";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const usersApi = createApi({
  //You can name the reducerPath same as the
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  //AutoFetch
  tagTypes: ["Campaign"],
  endpoints: (builder) => ({
    //fetch all campaigns
    users: builder.query<User[], number>({
      query: () => "/users",
      providesTags: ["Campaign"],
    }),
})
})

export const { useUsersQuery }
