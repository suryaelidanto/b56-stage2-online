import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoutes } from "./_protected-routes";
import HomeRoute from "./home";
import LoginRoute from "./login";
import ProfileRoute from "./profile";
import RegisterRoute from "./register";

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginRoute />,
    },
    {
      path: "/register",
      element: <RegisterRoute />,
    },
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/",
          element: <HomeRoute />,
        },
        {
          path: "/profile",
          element: <ProfileRoute />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}
