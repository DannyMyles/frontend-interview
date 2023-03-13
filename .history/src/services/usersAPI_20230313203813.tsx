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
    // Search User by start and end date
    searchUserByDate: builder.query<UsersPage, Range>({
      query: (term) =>`/users/search-by-date?startDate=${format(term.startDate,"yyyy-MM-dd")}&endDate=${format(term.endDate, "yyyy-MM-dd")}`,
    }),

    // We are using the mutation method to add the User to the data collection.
    addNewUser: builder.mutation<void, User>({
      query: (User) => ({
        //adding the end point of our api which is the same as the one we used when getting the Users
        url: `users`,
        // adding the method, that is the POST method
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),

    addUserImage: builder.mutation<void, userImage>({
      query: (user) => {
        let imagepayload = user;
        console.log("user", imagepayload);
        return {
          //adding the end point of our api which is the same as the one we used when getting a single campaign
          url: `users/file/${user.userId}`,
          // adding the method, that is the PUT method

          method: "POST",

          body: user.image,
        };
      },
      invalidatesTags: ["User"],
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

    // Here we pass in the number that represensts the type of ID as defined in the model.
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        //adding the end point of our api which is the same as the one we used when getting a single User
        url: `/posts/${id}`,
        // adding the method, that is the DELETE method
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

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
