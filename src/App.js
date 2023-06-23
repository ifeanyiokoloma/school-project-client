import React from "react";
import { RouterProvider } from "react-router-dom";
import NavbarProvider from "./Providers/NavbarProvider";
import PassportProvider from "./Providers/PassportProvider";
import { router } from "./services/router";

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
