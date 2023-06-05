import { createBrowserRouter } from "react-router-dom";
import Home from "../routes/Home";
import ErrorPage from "../routes/ErrorPage";
import Register from "../routes/Register";
import List from "../routes/List";
import Student from "../routes/Student";
import axios from "axios";

async function loader() {
  return (await axios({ method: "get", url: "/list" })).data;
}

async function paramsLoader({ params }) {
  return (await axios({ method: "get", url: `/students/${params.regno}` }))
    .data;
}

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
    element: <List />,
    loader: loader,
  },
  {
    path: "/students/:regno",
    element: <Student />,
    loader: paramsLoader,
  },
]);

export default router;
