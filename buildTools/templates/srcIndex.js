import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import HomePage from "./components/HomePage";
import CxThemeProvider from "@cx/ui/CxThemeProvider/CxThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <CxThemeProvider>
      <HomePage />
    </CxThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
