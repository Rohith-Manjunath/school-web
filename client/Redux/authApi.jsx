import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://school-web-50fi.onrender.com/api/",
  }),
//   tagTypes: ["Posts"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
        credentials:"include"

      }),
    //   invalidatesTags: ["Posts"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
        credentials:"include"

      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "register",
        method: "POST",
        body: credentials,
        credentials:"include"

      }),
    //   invalidatesTags: ["Posts"],
    }),
    enroll: builder.mutation({
      query: (data) => ({
        url: "enroll",
        method: "POST",
        body: data,
      }),
    //   invalidatesTags: ["Posts"],
    }), 
  
    query: builder.mutation({
      query: (data) => ({
        url: "query",
        method: "POST",
        body: data,
      }),
    //   invalidatesTags: ["Posts"],
    }),
    
    parentsenroll: builder.mutation({
      query: (credentials) => ({
        url: "parentsEnroll",
        method: "POST",
        body: credentials,
      }),
    //   invalidatesTags: ["Posts"],
    }),
    admissionQuery: builder.mutation({
      query: (data) => ({
        url: "admissionquery",
        method: "POST",
        body: data,
      }),
    //   invalidatesTags: ["Posts"],
    }),
    schedule: builder.mutation({
      query: (data) => ({
        url: "schedule",
        method: "POST",
        body: data,
      }),
    //   invalidatesTags: ["Posts"],
    }),

    newsUsers: builder.query({
      query: () => ({
        url: "news",
        method: "GET",
      }),
    //   invalidatesTags: ["Posts"],
    }),

 
    eventsUsers: builder.query({
      query: () => ({
        url: "events",
        method: "GET",
      }),
    //   invalidatesTags: ["Posts"],
    }),

 
 

  
  }),
  
});

export const {
useLoginMutation,
useLogoutMutation,
useRegisterMutation,
useEnrollMutation,
useQueryMutation,
useParentsenrollMutation,
useAdmissionQueryMutation,
useScheduleMutation,
useEventsUsersQuery,
useNewsUsersQuery
} = myApi;
