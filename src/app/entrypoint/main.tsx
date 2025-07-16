import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { router } from "../routing/index.tsx";
import { store } from "../store.ts";
import "../styles/reset.css";
import "../styles/base.css";
import "../styles/variables.css";
import Spinner from "../../shared/ui/Spinner/Spinner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>,
);
