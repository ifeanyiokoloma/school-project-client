import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./services/router";
import NavbarProvider from "./Providers/NavbarProvider";
import PassportProvider from "./Providers/PassportProvider";
import StudentProvider from "./Providers/StudentProvider";

const App = () => {
  return (
    <NavbarProvider>
      <StudentProvider>
        <PassportProvider>
          <RouterProvider router={router} />
        </PassportProvider>
      </StudentProvider>
    </NavbarProvider>
  );
};

export default App;
