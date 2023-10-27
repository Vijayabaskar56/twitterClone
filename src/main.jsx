import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Error404 from "./routes/Error404.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./index.css";
import WelcomePage from "./routes/WelcomePage.jsx";
import LoginFlowOne from "./routes/LoginFlowOne.jsx";
import LoginFlowTwo from "./routes/LoginFlowTwo.jsx";
import LoginFlow from "./routes/LoginFlow.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route path="screen02" element={<Screen02 />}/> */}
      <Route path="login" element={<LoginFlowOne/>} />
      <Route path="screen02" element={<LoginFlowTwo />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
