import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password)={}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedin] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
 
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedin(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedin(false);
  };

  return (
    <AuthContextProvider value={{isLoggedIn: isLoggedIn , onLogout: logoutHandler, onLogin: loginHandler}}>{props.children}</AuthContextProvider>
  )
};

export default AuthContext;
