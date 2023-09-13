import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//importar bootstrap
import "bootstrap/dist/css/bootstrap.css";
// ! los estilos propios deben ir debajo de bootstrap para que no los pise
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
