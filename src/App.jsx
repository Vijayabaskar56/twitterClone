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
import LoginFlowThree from "./routes/LoginFlowThree.jsx";
import LoginFlow from "./routes/LoginFlow.jsx";
import LoginFlowFour from "./routes/LoginFlowFour";
import Home from "./routes/AppFlow/Home";
import Nav from "./routes/AppFlow/Nav";
import Profile from "./routes/AppFlow/Profile";
import EditProfile from "./routes/AppFlow/EditProfile";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="loginOne" element={<LoginFlowOne />} />
        <Route path="loginTwo" element={<LoginFlowTwo />} />
        <Route path="loginThree" element={<LoginFlowThree />} />
        <Route path="loginFour" element={<LoginFlowFour />} />
        <Route
          path="loginflow"
          element={<LoginFlow heading="hello" subHeading="hiii" />}
        />
        <Route path="home" element={<Nav />}>
          <Route path="foryou" element={<Home />} />
          <Route path="following" element={<Home />} />
        </Route>
          <Route path="profile" element={<Profile />}>
          </Route>
            <Route path="editprofile" element={<EditProfile />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
