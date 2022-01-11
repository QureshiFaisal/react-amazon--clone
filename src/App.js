import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/UI/store/auth-context";
import react from "react";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <react.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </react.Fragment>
  );
}

export default App;
