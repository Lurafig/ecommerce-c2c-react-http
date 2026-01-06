import { Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import AppRoutes from "./Routes";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
