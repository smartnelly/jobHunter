import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [user, setUser] = useState(undefined);

  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");
    setLoggedIn(loggedInRes.data);
  }

  useEffect(() => {
    getLoggedIn();
    getUser();
  }, []);

  function getUser(user) {
    setUser(user);
  }

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn, user, getUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
