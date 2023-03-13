import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { BaseQueryFn, createApi, EndpointDefinitions, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from "@reduxjs/toolkit/query/react";
import { User } from "../models/users.model"

const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const campaignsApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: function (build: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, "userApi">): EndpointDefinitions {
    throw new Error("Function not implemented.");
  }
}),