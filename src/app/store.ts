import { configureStore } from "@reduxjs/toolkit";
import {
  authNoRefreshApi,
  authWithRefreshApi,
} from "../features/user/api/authApi";
import { getProfileApi } from "../entities/user/api/getProfile";

export const store = configureStore({
  reducer: {
    [authNoRefreshApi.reducerPath]: authNoRefreshApi.reducer,
    [authWithRefreshApi.reducerPath]: authWithRefreshApi.reducer,
    [getProfileApi.reducerPath]: getProfileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authNoRefreshApi.middleware)
      .concat(authWithRefreshApi.middleware)
      .concat(getProfileApi.middleware),
});
