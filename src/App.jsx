import { useState } from "react";

import "./App.css";
import WelcomePage from "./routes/WelcomePage";
import { Outlet, useLocation } from "react-router-dom";
import LoginFlowOne from "./routes/LoginFlowOne";
import LoginFlow from "./routes/LoginFlow";
import LoginFlowTwo from "./routes/LoginFlowTwo";
import LoginFlowThree from "./routes/LoginFlowThree";
import LoginFlowFour from "./routes/LoginFlowFour";
import Temp from "./routes/Temp";

function App() {
  return (
    <>
      <WelcomePage />
      {/* <LoginFlow /> */}
      <Outlet />
      <LoginFlowOne />
      <LoginFlowTwo />
      <LoginFlowThree />
      {/* <LoginFlow /> */}
      <LoginFlowFour />
      <Temp />
    </>
  );
}

export default App;
