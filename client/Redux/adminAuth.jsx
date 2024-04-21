import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const adminApi = createApi({


  reducerPath: "admin",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://school-web-50fi.onrender.com/api/admin/",
  }),
  tagTypes: ["Events","News"],
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

    updateEvent: builder.mutation({
        query: ({event,id}) => ({
          url:`event/${id}`,
          method: "PUT",
          credentials:"include",
          body:event
  
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
    getSingleEvent: builder.query({
      query: (id) => ({
        url:`event/${id}`,
        method: "GET",
        credentials:"include",

      }),
invalidatesTags:["Events"]

 
  }),
    getAllNews: builder.query({
      query: () => ({
        url:`news`,
        method: "GET",
        credentials:"include",

      }),

      providesTags:["News"]
 
  }),

  deleteNews: builder.mutation({
    query: (newsId) => ({
      url:`news/${newsId}`,
      method: "DELETE",
      credentials:"include",

    }),

    invalidatesTags:["News"]

}),
  updateNews: builder.mutation({
    query: (newsId) => ({
      url:`news/${newsId}`,
      method: "PUT",
      credentials:"include",

    }),

    invalidatesTags:["News"]

}),
  postNews: builder.mutation({
    query: (data) => ({
      url:`postNews`,
      method: "POST",
      credentials:"include",
      body:data

    }),

    invalidatesTags:["News"]

}),
  }),

  
  
  
});

export const {
useEventsQuery,
useDeleteEventByIdMutation,
usePostNewEventMutation,
useGetAllNewsQuery,
useDeleteNewsMutation,
usePostNewsMutation,
useUpdateEventMutation,
useUpdateNewsMutation,
useGetSingleEventQuery
} = adminApi;
