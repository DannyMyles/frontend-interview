import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/users.model";

// const baseUrl = process.env.REACT_APP_API_BASE_URL;
// export const usersApi = createApi({
//   //You can name the reducerPath same as the
//   reducerPath: "usersApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: baseUrl,
//   }),
//   //AutoFetch
//   tagTypes: ["User"],
//   endpoints: (builder) => ({
//     //fetch all campaigns
//     users: builder.query<User[], number>({
//       query: () => "/users",
//       providesTags: ["User"],
//     }),
// }),

// // update a user

// })

// export const { useUsersQuery } = usersApi

// Define the models for the user data.

// Define an API endpoint for fetching all users and editing a user.
const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl}),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),
    
    editUser: builder.mutation<User, { id: string; updatedUserData: User }>({
      query: ({ id, updatedUserData }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: updatedUserData,
        providesTags: ['Users']
      }),
    }),
  }),
});

// Export the API slice and use it in your application.
export const { useGetUsersQuery, useEditUserMutation } = usersApi;
