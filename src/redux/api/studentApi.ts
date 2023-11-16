/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../apiConfig";

export const studentApi = createApi({
  reducerPath: "student",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl() + "/api/",
  }),
  tagTypes: ["Students", "Role", "UsersRole"],
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "student",
      providesTags: ["Students"],
    }),
    createStudent: builder.mutation({
      query: ({ ...data }) => ({
        url: "student",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Students"],
    }),
  }),
});

export const { useGetStudentsQuery, useCreateStudentMutation } = studentApi;
