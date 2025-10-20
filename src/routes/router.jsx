import { createBrowserRouter } from "react-router-dom";
import Home from "../copmponents/pages/Home";
import AddStock from "../copmponents/pages/AddStock";
import AllStock from "../copmponents/pages/AllStock";
import Layout from "../Main/Layout";
import ErrorPage from "../copmponents/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add-stock", element: <AddStock /> },
      { path: "/all-stock", element: <AllStock /> },
    ],
  },
]);

export default router;
