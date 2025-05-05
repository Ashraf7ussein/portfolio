import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import ProjectDetailsPage from "./ProjectDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "project/:id", element: <ProjectDetailsPage /> },
    ],
  },
]);

export default router;
