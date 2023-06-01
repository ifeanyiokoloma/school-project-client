import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "../services/router";
import NavbarProvider from "../Providers/NavbarProvider";
import PassportProvider from "../Providers/PassportProvider";

const App = () => {

  return (
    <NavbarProvider>
      <PassportProvider>
        <RouterProvider router={router} />
      </PassportProvider>
    </NavbarProvider>
  );
};

export default App;
