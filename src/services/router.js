import { createBrowserRouter } from "react-router-dom";
import Home from "../routes/Home";
import ErrorPage from "../routes/ErrorPage";
import Register from "../routes/Register";
import Students from "../routes/Students";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/list",
    element: <Students />,
  },
]);

export default router;
