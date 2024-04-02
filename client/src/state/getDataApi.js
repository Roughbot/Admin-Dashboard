import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getData = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
  }),
  reducerPath: "dataApi",
  tagTypes: ["User", "Geography", "Data", "CustomerData", "SectorData"],
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "getdata",
      providesTags: ["Data"],
    }),

    getUser: builder.query({
      query: (id) => `getuser/user/${id}`,
      providesTags: ["User"],
    }),

    getGeoData: builder.query({
      query: () => "getgeodata",
      providesTags: ["Geography"],
    }),

    getCustomerData: builder.query({
      query: () => "getcustomerdata",
      providesTags: ["CustomerData"],
    }),

    getSectorData: builder.query({
      query: () => "getsectordata",
      providesTags: ["SectorData"],
    }),
    getRegionData: builder.query({
      query: () => "getregiondata",
      providesTags: ["RegionData"],
    }),
    getTopicData: builder.query({
      query: () => "gettopicdata",
      providesTags: ["TopicData"],
    }),
    getYearData: builder.query({
      query: () => "getyeardata",
      providesTags: ["YearData"],
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetUserQuery,
  useGetGeoDataQuery,
  useGetCustomerDataQuery,
  useGetSectorDataQuery,
  useGetRegionDataQuery,
  useGetTopicDataQuery,
  useGetYearDataQuery,
} = getData;
