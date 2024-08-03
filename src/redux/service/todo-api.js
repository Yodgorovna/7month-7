import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { build } from "vite";

export const todoservice = createApi({
  reducerPath: "todo_api",
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3600",
    headers: { Authorization: "Bearer jbefuwbef3h0faepfapiefnape" },
  }),
  endpoints: (build) => ({
    getTodos: build.query({
      query: () => ({ url: "/todos" }),
      providesTags: ["get-todo"],
    }),
    createTodo: build.mutation({
      query: (data) => ({
        url: `/todos/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["get - todo"],
    }),
  }),
});

export const { useGetTodosQuery, useCreateTodoMutation } = todoservice;
