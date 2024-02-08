import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
  }),
  reducerPath: "dataApi",
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "getData",
    }),
  }),
});

export const { useGetDataQuery } = api;
