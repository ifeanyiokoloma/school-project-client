import React from "react";
import { RouterProvider } from "react-router-dom";
import NavbarProvider from "./Providers/NavbarProvider";
import PassportProvider from "./Providers/PassportProvider";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import Register from "./routes/Register";
import List from "./routes/List";
import Student from "./routes/Student";
import axios from "axios";

const App = () => {

  async function paramsLoader({ params }) {
    try {
      const { data } = await axios({
        method: "get",
        url: `/students/${params.regno}`,
      });
      return data;
    } catch (err) {
      console.log(err);
      return "There was an error, try again";
    }
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
      // loader: loaderRef.current,
    },
    {
      path: "/students/:regno",
      element: <Student />,
      loader: paramsLoader,
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
