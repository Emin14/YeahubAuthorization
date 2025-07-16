import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { baseUrl } from "./baseUrl";
import type { BaseQueryApi } from "@reduxjs/toolkit/query";

export type LoginRequest = {
  username: string;
  password: string;
};

export type RegistrationRequest = {
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  confirmPassword: string;
};

export const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    const token = Cookies.get("access_token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (
  args: {
    url: string;
    method?: string;
    body?: LoginRequest | RegistrationRequest;
  },
  api: BaseQueryApi,
  extraOptions: object,
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const refreshResult = await baseQuery(
      { url: "/auth/refresh", method: "GET" },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      const { access_token } = refreshResult.data as { access_token: string };
      Cookies.set("access_token", access_token);
      result = await baseQuery(args, api, extraOptions);
    } else {
      Cookies.remove("access_token");
      window.location.href = "/login";
    }
  }

  return result;
};
