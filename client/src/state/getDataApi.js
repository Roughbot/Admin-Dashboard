import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getData = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
  }),
  reducerPath: "dataApi",
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "getData",
    }),

    getUser: builder.query({
      query: (id) => `getUser/user/${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetDataQuery, useGetUserQuery } = getData;
