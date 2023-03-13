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
  //You can name the reducerPath same a