import { useState } from "react";

import "./App.css";
import Screen0 from "./routes/Screen0";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Screen0 />
      <Outlet />
    </>
  );
}

export default App;
