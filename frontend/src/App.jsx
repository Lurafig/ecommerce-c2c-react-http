import { Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar/Navbar";
import AppRoutes from "./Routes";
import LoginCtn from "./components/LoginCtn/LoginCtn";

import "./App.css";

const logged = true;

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      {logged && <LoginCtn />}
    </>
  );
}

export default App;
