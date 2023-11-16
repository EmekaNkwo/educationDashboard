/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teacherApi = createApi({
  reducerPath: "teacher",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
  }),
  tagTypes: ["Teachers"],
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => "teacher",
      providesTags: ["Teachers"],
    }),
    createTeacher: builder.mutation({
      query: ({ ...data }) => ({
        url: "teacher",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Teachers"],
    }),
  }),
});

export const { useGetTeachersQuery, useCreateTeacherMutation } = teacherApi;
