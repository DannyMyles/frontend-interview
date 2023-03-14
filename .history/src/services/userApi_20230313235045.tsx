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
  tagTypes: ["User"],
  endpoints: (builder) => ({
    //fetch all campaigns
    users: builder.query<User[], number>({
      query: () => "/users",
      providesTags: ["User"],
    }),
}),
updateUser: builder.mutation<User[], number>({
    query: ({ id, ...rest }) => ({
      //adding the end point of our api which is the same as the one we used when getting a single user
      url: `/users/${id}`,
      // adding the method, that is the PUT method
      method: "PUT",
      body: rest,
    }),
    invalidatesTags: ["User"],
  })
// update a user

})

export const { useUsersQuery,updateUserMutation } = usersApi
