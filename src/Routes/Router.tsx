import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Berries } from "../pages/Berries";
export const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Berries",
      element: <Berries />,
    },
  ]);

  return <RouterProvider router={router} />;
};
