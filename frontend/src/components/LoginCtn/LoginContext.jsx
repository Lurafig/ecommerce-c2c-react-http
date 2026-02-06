import React, { createContext, useState, useContext, useEffect } from "react";

const LoginContext = createContext();

export const UseLoginContext = () => {
  return useContext(LoginContext);
};

export default function LoginProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => console.log(isOpen), [isOpen]);

  const openLogin = () => setIsOpen(true);
  const closeLogin = () => setIsOpen(false);
  const toggleLogin = () => setIsOpen((prev) => !prev);

  return (
    <LoginContext.Provider
      value={{ isOpen, openLogin, closeLogin, toggleLogin }}
    >
      {children}
    </LoginContext.Provider>
  );
}
