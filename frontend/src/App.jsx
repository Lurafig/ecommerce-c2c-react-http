import { Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar/Navbar";
import AppRoutes from "./Routes";
import LoginCtn from "./components/LoginCtn/LoginCtn";

import LoginProvider from "./components/LoginCtn/LoginContext";

import "./App.css";

const logged = true;

function App() {
  return (
    <>
      {logged && (
        <LoginProvider>
          <Navbar />
          {<LoginCtn />}
        </LoginProvider>
      )}
      <AppRoutes />
    </>
  );
}

export default App;
