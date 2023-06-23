import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import SearchProvider from "./Providers/SearchProvider";
import StudentProvider from "./Providers/StudentProvider";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/Theme";
import UtilitiesProvider from "./Providers/UtilitiesProvider";
import Spinner from "./components/Spinner";
import { SnackbarProvider } from "notistack";
import FaceioProvider from "./components/Faceio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FaceioProvider>
        <UtilitiesProvider>
          <SearchProvider>
            <StudentProvider>
              <SnackbarProvider />
              <App />
              <Spinner />
            </StudentProvider>
          </SearchProvider>
        </UtilitiesProvider>
      </FaceioProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
