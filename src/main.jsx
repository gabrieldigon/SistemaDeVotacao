
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/login/index"; //! import this
import "./index.css";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/home", element: <App /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
