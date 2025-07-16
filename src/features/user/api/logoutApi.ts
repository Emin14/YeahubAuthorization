import { createApi } from "@reduxjs/toolkit/query/react";
import type { LogoutResponse } from "../model/types";
import { baseQueryWithReauth } from "../../../shared/api/baseQuery";

export const logoutApi = createApi({
  reducerPath: "logoutApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    logout: builder.mutation<LogoutResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
    }),
  }),
});

export const { useLogoutMutation } = logoutApi;
