import { createApi } from "@reduxjs/toolkit/query/react";
import type { UserResponse } from "../model/types";
import { baseQuery } from "../../../shared/api/baseQuery";

export const refreshTokenApi = createApi({
  reducerPath: "refreshTokenApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    refresh: builder.query<UserResponse, void>({
      query: () => ({
        url: "/auth/refresh",
      }),
    }),
  }),
});

export const { useRefreshQuery } = refreshTokenApi;
