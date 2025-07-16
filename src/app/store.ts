import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/user/api/authApi";
import { logoutApi } from "../features/user/api/logoutApi";
import { refreshTokenApi } from "../features/user/api/refreshToken";
import { registrationApi } from "../features/user/api/registrationApi";
import { getProfileApi } from "../pages/user/api/getProfile";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [logoutApi.reducerPath]: logoutApi.reducer,
    [refreshTokenApi.reducerPath]: refreshTokenApi.reducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [getProfileApi.reducerPath]: getProfileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(logoutApi.middleware)
      .concat(refreshTokenApi.middleware)
      .concat(registrationApi.middleware)
      .concat(getProfileApi.middleware),
});
