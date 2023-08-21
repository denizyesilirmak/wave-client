import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout";
import CreateSession from "../screens/create-session";
import VideoConference from "../screens/video-conference";
import Error from "../screens/error";
import Settings from "../screens/settings";
import Login from "../screens/login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/create-session",
        element: <CreateSession />,
      },
      {
        path: "/video-conference",
        element: <VideoConference />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
