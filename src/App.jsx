import { useState } from "react";

import "./App.css";
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
    // <Routes>
    <>
      <Route
        path="/"
        element={<WelcomePage />}>
        {/* <Route path="screen02" element={<Screen02 />}/> */}
      </Route>
      <Route
        path="/login"
        element={<LoginFlowOne />}
      />
      <Route
        path="/screen02"
        element={<LoginFlowTwo />}
      />
    </>
    // </Routes>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
