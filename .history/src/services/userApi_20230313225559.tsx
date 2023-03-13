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
//   })
//   // Search campaign by start and end date
  

//   // update a user
// });

// export const { useUsersQuery } = usersApi;

const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl,}),
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: () => '/users',
      }),
      updateUser: builder.mutation({
        query: ({ userId, userData }) => ({
          url: `/users/${userId}`,
          method: 'PATCH',
          body: userData,
        }),
      }),
    }),
  });
  