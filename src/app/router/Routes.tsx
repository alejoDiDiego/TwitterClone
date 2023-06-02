import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../components/home/Home";
import RequireAuth from "./RequireAuth";
import RequireNoAuth from "./RequireNoAuth";
import Register from "../components/register/Register";
import Login from "../components/login/Login";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        // element: <RequireAuth />,
        // children: [{ path: "home", element: <Home /> }],
      },
      {
        element: <RequireNoAuth />,
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
      { path: "*", element: <p>Not found</p> },
    ],
  },
];

export const router = createBrowserRouter(routes);
