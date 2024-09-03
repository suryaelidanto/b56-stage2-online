import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./home";
import LoginRoute from "./login";
import ProfileRoute from "./profile";
import RegisterRoute from "./register";

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRoute />,
    },
    {
      path: "/login",
      element: <LoginRoute />,
    },
    {
      path: "/register",
      element: <RegisterRoute />,
    },
    {
      path: "profile",
      element: <ProfileRoute />,
    },
  ]);

  return <RouterProvider router={router} />;
}
