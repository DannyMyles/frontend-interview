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
  tagTypes: ["Users", "search"],
  endpoints: (builder) => ({
    //fetch all Userss
    campaigns: builder.query({
      query: () =>
        "/users",
      providesTags: ["Users"],
    }),

        // We are using the mutation method to add the Users to the data collection.
    //  Mutation takes in the Users object defined in the model interface
    addNewUsers: builder.mutation<void, Users>({
      query: (campaign) => ({
        //adding the end point of our api which is the same as the one we used when getting the campaigns
        url: "/campaigns",
        // adding the method, that is the POST method
        method: "POST",
        body: campaign,
      }),
      invalidatesTags: ["Users"],
    }),

    updateUser: builder.mutation<void, Users>({
      query: ({ id, ...rest }) => ({
        //adding the end point of our api which is the same as the one we used when getting a single Users
        url: `/posts/${id}`,
        // adding the method, that is the PUT method
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Users"],
    }),

    // Here we pass in the number that represensts the type of ID as defined in the model.
    deleteCampaign: builder.mutation<void, number>({
      query: (id) => ({
        //adding the end point of our api which is the same as the one we used when getting a single campaign
        url: `/posts/${id}`,
        // adding the method, that is the DELETE method
        method: "DELETE",
      }),
      invalidatesTags: ["Campaign"],
    }),
  }),
});

// Exposed api
export const {
  useCampaignsQuery,
  useSearchCampaignQuery,
  useAddNewCampaignMutation,
  useDeleteCampaignMutation,
  useUpdateCampaignMutation,
} = usersApi;
// import the useCampaignsQuery in the App.tsx
