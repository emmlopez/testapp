import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import CxThemeProvider from "@cx/ui/CxThemeProvider/CxThemeProvider";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <CxThemeProvider>
    <App />
  </CxThemeProvider>,
  document.getElementById("root")
);
