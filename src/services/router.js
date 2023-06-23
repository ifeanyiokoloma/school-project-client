import { createBrowserRouter } from "react-router-dom";
import Home from "../routes/Home";
import ErrorPage from "../routes/ErrorPage";
import Register from "../routes/Register";
import Student from "../routes/Student";
import { fetchStudent } from "./functions";
import About from "../routes/About";
import List from "../routes/List";

export const router = createBrowserRouter([
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
  },
  {
    path: "/students/:regno",
    element: <Student />,
    loader: fetchStudent,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
