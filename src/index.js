import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//importa el componente App del otro archivo

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
