import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Users } from "../models/users.model";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const usersApi = createApi({
    //You can name the reducerPath same as the
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
      baseUrl: baseUrl,
    }),
     //AutoFetch
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    //fetch all campaigns
    campaigns: builder.query<Users[],void>({
      query:()=>"/users",
      providesTags: ["Users"],
    }),

    updateCampaign: builder.mutation<void, Users>({
        query: ({ id, ...rest }) => ({
          //adding the end point of our api which is the same as the one we used when getting a single campaign
          url: `/posts/${id}`,
          // adding the method, that is the PUT method
          method: "PUT",
          body: rest,
        }),
        invalidatesTags: ["Users"],
      }),
  
})

export const {
    useUserQuery,
    useUpdateUserMutation,
  } = usersApi;