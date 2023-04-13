import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import PassportProvide from "./context/PassportContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PassportProvide>
        <App />
      </PassportProvide>
    </BrowserRouter>
  </React.StrictMode>
);
