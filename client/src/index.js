import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MainTheme } from "./Providers/ThemeProvider";

ReactDOM.render(
  <MainTheme>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainTheme>,
  document.getElementById("root")
);
