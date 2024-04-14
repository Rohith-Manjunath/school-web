import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/",
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
    }),  }),
  
});

export const {
useLoginMutation,
useLogoutMutation,
useRegisterMutation,
useEnrollMutation
} = myApi;
