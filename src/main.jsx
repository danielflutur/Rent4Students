import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n.js";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { AuthDetailsProvider } from "./context/AuthDetailsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AuthDetailsProvider>
        <App />
      </AuthDetailsProvider>
    </AuthProvider>
  </React.StrictMode>
);
