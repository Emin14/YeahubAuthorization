import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const module = await import("../App");
      return { Component: module.default };
    },
    children: [
      {
        index: true,
        async lazy() {
          const module = await import("../../pages/user/ui/HomePage/HomePage");
          return { Component: module.default };
        },
      },
      {
        path: "registration",
        async lazy() {
          const module = await import(
            "../../pages/user/ui/RegistrationPage/RegistrationPage"
          );
          return { Component: module.default };
        },
      },
      {
        path: "password-recovery",
        async lazy() {
          const module = await import(
            "../../pages/user/ui/PasswordRecoveryPage/PasswordRecoveryPage"
          );
          return { Component: module.default };
        },
      },
      {
        path: "login",
        async lazy() {
          const module = await import(
            "../../pages/user/ui/LoginPage/LoginPage"
          );
          return { Component: module.LoginPage };
        },
      },
    ],
  },
]);
