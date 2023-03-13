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
  // Search campaign by start and end date
  searchCampaignByDate: builder.query<CampaignsPage, Range>({
    query: (term) =>
      `/campaigns/search-by-date?startDate=${format(
        term.startDate,
        "yyyy-MM-dd"
      )}&endDate=${format(term.endDate, "yyyy-MM-dd")}`,
  }),

  // update a user
});

export const { useUsersQuery } = usersApi;
