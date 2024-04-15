import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/admin/",
  }),
  tagTypes: ["Events"],
  endpoints: (builder) => ({
    events: builder.query({
      query: () => ({
        url: "events",
        credentials:"include",
        
    }),
    providesTags:["Events"]

    }),

    deleteEventById: builder.mutation({
        query: (id) => ({
          url:`event/${id}`,
          method: "DELETE",
          credentials:"include"
  
        }),
invalidatesTags:["Events"]

   
    }),

    postNewEvent: builder.mutation({
      query: (event) => ({
        url:`postEvent`,
        method: "POST",
        credentials:"include",
        body:event

      }),
invalidatesTags:["Events"]

 
  }),

  }),

  
  
  
});

export const {
useEventsQuery,
useDeleteEventByIdMutation,
usePostNewEventMutation
} = adminApi;
