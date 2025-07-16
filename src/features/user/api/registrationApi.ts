import { createApi } from "@reduxjs/toolkit/query/react";
import type {
  ApiError,
  RegistrationRequest,
  UserResponse,
} from "../model/types";
import { baseQueryWithReauth } from "../../../shared/api/baseQuery";

export const registrationApi = createApi({
  reducerPath: "registrationApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
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
  }),
});

export const { useRegistrationMutation } = registrationApi;
