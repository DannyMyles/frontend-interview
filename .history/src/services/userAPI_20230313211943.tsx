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
   tagTypes: ["Campaign"],
   endpoints: (builder) => ({
     //fetch all campaigns
     campaigns: builder.query<CampaignsPage, number>({
       query: (pageNo = 0, pageSize = 5) => `/campaigns?pageNo=${pageNo}&pageSize=${pageSize}`,
       providesTags: ["Campaign"],
     }),
})
export const { useUserQuery } = usersApi;