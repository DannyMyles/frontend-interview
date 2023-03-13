import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Campaign,
  campaignImage,
  CampaignsPage,
  Range,
} from "../models/campaigns.model";
import format from "date-fns/format";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const campaignsApi = createApi({
  //You can name the reducerPath same as the
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  //AutoFetch
  tagTypes: ["User"],
  endpoints: (builder) => ({
    //fetch all Users
    users: builder.query<UsersPage, number>({
      query: (pageNo = 0, pageSize = 5) => `/users?pageNo=${pageNo}&pageSize=${pageSize}`,
      providesTags: ["User"],
    }),

    updateUser: builder.mutation<void, User>({
      query: ({ id, ...rest }) => ({
        //adding the end point of our api which is the same as the one we used when getting a single User
        url: `/posts/${id}`,
        // adding the method, that is the PUT method
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["User"],
    }),


// Exposed api
export const {
  useUsersQuery,
  useSearchUserQuery,
  useAddNewUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useSearchUserByDateQuery,
  useAddUserImageMutation,
} = usersApi;
// import the useCampaignsQuery in the App.tsx
