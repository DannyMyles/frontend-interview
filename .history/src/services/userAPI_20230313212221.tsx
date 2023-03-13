import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/users.model"

const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const campaignsApi = createApi({
  //You can name the reducerPath same as the
  reducerPath: "campaignsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
   //AutoFetch
   tagTypes: ["User"],
   endpoints: (builder) => ({
     //fetch all campaigns
     users: builder.query<User[], void>({
       query: () => "/users"?pageNo=${pageNo}&pageSize=${pageSize}`",
       providesTags: ["User"],
     }),
})
export const { useUserQuery } = usersApi;