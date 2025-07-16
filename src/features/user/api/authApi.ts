import { createApi } from "@reduxjs/toolkit/query/react";
import type { LoginRequest, UserResponse } from "../model/types";
import { baseQuery } from "../../../shared/api/baseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
