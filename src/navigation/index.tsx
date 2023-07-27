import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreateSession from "../screens/create-session";
import VideoConference from "../screens/video-conference";
import Layout from "./layout";
import Error from "../screens/error";

const router = createBrowserRouter([
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
    ],
  },
]);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
