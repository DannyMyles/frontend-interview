import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Users } from "../models/users.model";
const baseUrl = process.env.REACT_APP_API_BASE_URL;