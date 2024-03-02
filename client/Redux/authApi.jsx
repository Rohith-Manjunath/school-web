import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/" }),
  endpoints: (builder) => ({
    enroll: builder.mutation({
      query: (formData) => ({
        url: "enroll",
        method: "POST",
        body: formData,
      }),
    }),
    

   
  }),
});

export const {
  useEnrollMutation,
  
} = authApi;
