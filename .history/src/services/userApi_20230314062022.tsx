// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { User } from "../models/users.model";

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

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the models for the user data.
export interface Address {
  street: string;
  city: string;
  zipcode: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
}

// Define an API endpoint for fetching all users and editing a user.
// const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "https://example.com/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),
    editUser: builder.mutation<User, { id: string; updatedUserData: User }>({
      query: ({ id, updatedUserData }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: updatedUserData,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

// Export the API slice and use it in your application.
export const { useGetUsersQuery, useEditUserMutation } = usersApi;

// Export the user data models.
export const userModels = { user: { id: "", name: "", email: "", phone: "", address: { street: "", city: "", zipcode: "" } } };
