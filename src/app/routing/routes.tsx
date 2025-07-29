import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const module = await import("../layouts/AuthLayout/AuthLayout");
      return { Component: module.default };
    },
    children: [
      {
        path: "registration",
        async lazy() {
          const module = await import(
            "../../pages/ui/RegistrationPage/RegistrationPage"
          );
          return { Component: module.default };
        },
      },
      {
        path: "password-recovery",
        async lazy() {
          const module = await import(
            "../../pages/ui/PasswordRecoveryPage/PasswordRecoveryPage"
          );
          return { Component: module.default };
        },
      },
      {
        path: "login",
        async lazy() {
          const module = await import("../../pages/ui/LoginPage/LoginPage");
          return { Component: module.default };
        },
      },
    ],
  },
  {
    path: "/",
    async lazy() {
      const module = await import("../layouts/MainLayout/MainLayout");
      return { Component: module.default };
    },
    children: [
      {
        index: true,
        async lazy() {
          const module = await import("../../pages/ui/HomePage/HomePage");
          return { Component: module.default };
        },
      },
    ],
  },
]);
