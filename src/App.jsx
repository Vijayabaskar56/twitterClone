import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
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
import PostTweet from "./routes/AppFlow/PostTweet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./routes/context/AuthContext";
import AuthProvider from "./routes/context/AuthProvider";
import { ThemeProvider } from "./routes/context/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "lightTheme");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

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
        <Route path="profile" element={<Profile />}></Route>
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="postTweet" element={<PostTweet />} />
      </>
    )
  );

  function TwitterApp() {
    const { isLoggedin } = useContext(AuthContext);

    return (
      <>
        <RouterProvider router={route} />
      </>
    );
  }

  return (
    <>
      <AuthProvider>
        <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
          <TwitterApp />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
