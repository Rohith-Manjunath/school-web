// In Redux adminAuth.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminAuth = createApi({
  reducerPath: "authApi",
  tagTypes: ["event", "id"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/admin/" }),
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => ({
        url: `events`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["event"],
    }),
    getSingleEvent:builder.query({

     query:(id)=>({
      url: `event/${id}`,
      method: "GET",
      credentials: "include",
     })

    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `event/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["event", "id"], // Move invalidatesTags here
    }),
  }),
});

export const { useDeleteEventMutation, useGetAllEventsQuery, useGetSingleEventQuery } = adminAuth;
