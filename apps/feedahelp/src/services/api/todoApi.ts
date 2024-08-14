import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoAPi = createApi({
  reducerPath: "todoApi",
  tagTypes: ["todo"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_LOCAL_BACKEND_BASE_URL,
  }),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => ({
        url: "/todo",
        method: "GET",
        headers: {
          //   authorization: `Bearer token`,
        },
      }),
      providesTags: ["todo"],
    }),
    postTodo: builder.mutation({
      query: ({ data }) => ({
        url: "/todopost",
        method: "POST",
        body: data,
        headers: {
          //   authorization: `Bearer token`,
        },
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodoQuery, usePostTodoMutation } = todoAPi;
