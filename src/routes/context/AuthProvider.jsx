import { useState } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";

const AuthProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedIn] = useState();
  return (
    <>
      <AuthContext.Provider value={{ isLoggedin, setIsLoggedIn }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.any,
};
