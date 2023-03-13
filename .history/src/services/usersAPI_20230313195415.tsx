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
    Userss: builder.query({
      query: (pageNo = 0, pageSize = 5) =>
        `/campaigns?pageNo=${pageNo}&pageSize=${pageSize}`,
      providesTags: ["Campaign"],
    }),

    //Search Campaign by title query
    searchCampaign: builder.query<Campaign, string>({
      query: (term) => `/campaigns/search?title=${encodeURIComponent(term)}`,
    }),

    // Search campaign by start and end date
    // searchCampaignByDate: builder.query<string, Campaign>({
    //   query: (startDate:string,endDate:string )=> `/campaigns/search-by-date?startDate=${startDate}&endDate=${endDate}`
    // }),

    // We are using the mutation method to add the campaign to the data collection.
    //  Mutation takes in the Campaign object defined in the model interface
    addNewCampaign: builder.mutation<void, Campaign>({
      query: (campaign) => ({
        //adding the end point of our api which is the same as the one we used when getting the campaigns
        url: "/campaigns",
        // adding the method, that is the POST method
        method: "POST",
        body: campaign,
      }),
      invalidatesTags: ["Campaign"],
    }),

    updateCampaign: builder.mutation<void, Campaign>({
      query: ({ id, ...rest }) => ({
        //adding the end point of our api which is the same as the one we used when getting a single campaign
        url: `/posts/${id}`,
        // adding the method, that is the PUT method
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Campaign"],
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
