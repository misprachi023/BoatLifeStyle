import React from "react";
import { createContext, useState, useEffect } from "react";

/**
 * @author Prachi Mishra
 * @function AuthContexProvider
 **/
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(() => {
    return localStorage.getItem("isLogin") === "true";
  });
  const [Products, setProducts] = useState([]);
 

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, user, setUser, Products, setProducts }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
