import React from "react";
import { RouterProvider } from "react-router-dom";
import NavbarProvider from "./Providers/NavbarProvider";
import PassportProvider from "./Providers/PassportProvider";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import Register from "./routes/Register";
import List from "./routes/List";
import Student, { fetchStudent } from "./routes/Student";
import About from "./routes/About";

const App = () => {
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

  return (
    <NavbarProvider>
      <PassportProvider>
        <RouterProvider router={router} />
      </PassportProvider>
    </NavbarProvider>
  );
};

export default App;
