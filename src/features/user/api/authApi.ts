import { createApi } from "@reduxjs/toolkit/query/react";
import type {
  ApiError,
  LoginRequest,
  LogoutResponse,
  RegistrationRequest,
  UserResponse,
} from "../model/types";
import { baseQuery, baseQueryWithReauth } from "../../../shared/api/baseQuery";

export const authNoRefreshApi = createApi({
  reducerPath: "authNoRefreshApi ",
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
    registration: builder.mutation<
      UserResponse | ApiError,
      RegistrationRequest
    >({
      query: (data) => {
        const { firstName, lastName, ...rest } = data;
        const processedData = { ...rest, username: `${firstName} ${lastName}` };
        return {
          url: "/auth/signup",
          method: "POST",
          body: processedData,
        };
      },
    }),
    refresh: builder.query<UserResponse, void>({
      query: () => ({
        url: "/auth/refresh",
        method: "GET",
      }),
    }),
  }),
});

export const authWithRefreshApi = createApi({
  reducerPath: "authWithRefreshApi ",
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

export const { useLoginMutation, useRegistrationMutation, useRefreshQuery } =
  authNoRefreshApi;
export const { useLogoutMutation } = authWithRefreshApi;
