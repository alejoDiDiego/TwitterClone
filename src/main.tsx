import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./app/router/Routes.tsx";
import { RouterProvider } from "react-router-dom";
import { StoreContext, store } from "./app/stores/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
);
