import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userAuth = createApi({
  reducerPath: "userAuth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (form) => ({
        url: "register",
        method: "POST",
        body: form,
      }),
    }),
    login: builder.mutation({
      query: (form) => ({
        url: "login",
        method: "POST",
        body: form,
        credentials: "include"
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
        credentials: "include"
      }),
    }),
    me: builder.mutation({
      query: () => ({
        url: "me",
        method: "GET",
        credentials: "include"
      }),
    }),
    query: builder.mutation({
      query: (form) => ({
        url: "query",
        method: "POST",
        body: form,
      }),
    }),
    parentsQuery: builder.mutation({
      query: (form) => ({
        url: "parentsenroll",
        method: "POST",
        body: form,
      }),
    }),
    admissionQuery: builder.mutation({
      query: (form) => ({
        url: "admissionquery",
        method: "POST",
        body: form,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useQueryMutation,
  useParentsQueryMutation,
  useAdmissionQueryMutation,
  useLogoutMutation,
  useMeMutation
} = userAuth;
