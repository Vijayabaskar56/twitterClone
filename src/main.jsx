import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Error404 from "./routes/Error404.jsx"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import "./index.css";
import Screen01 from "./routes/Screen01.jsx";

const route = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="screen01" element={<Screen01 />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
