import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/users.model"

const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const campaignsApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({baseUrl:baseUrl}),
  endpoints:(builder) =>({
    // fet
    users: builder.query<User[], void>({
      query:() => "/users"
    }),
    // fetch a single user
    user
  })
})