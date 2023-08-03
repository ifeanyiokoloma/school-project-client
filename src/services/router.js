import { createBrowserRouter } from "react-router-dom";
import Home from "../routes/Home";
import ErrorPage from "../routes/ErrorPage";
import Register from "../routes/Register";
// import Student from "../routes/Student";
import { fetchStudent } from "./functions";
import About from "../routes/About";
import List from "../routes/List";
// import Protected from "../components/Protected";
import Resume from "../components/Resume";
import StudentRecord from "../routes/StudentRecord";
import Exit from "../components/Exit";

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
    path: "/students/:faceID",
    element: <StudentRecord />,
    loader: fetchStudent,
  },
  {
    path: "/exit",
    element: <Exit />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);
