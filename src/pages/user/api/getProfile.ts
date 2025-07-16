import { createApi } from "@reduxjs/toolkit/query/react";
import type { User } from "../../../features/user/model/types";
import { baseQueryWithReauth } from "../../../shared/api/baseQuery";

export const getProfileApi = createApi({
  reducerPath: "getProfileApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getProfile: builder.query<User, void>({
      query: () => ({
        url: "/auth/profile",
      }),
    }),
  }),
});

export const { useGetProfileQuery } = getProfileApi;
