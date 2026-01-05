import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Product";
import Greeting from "./pages/Greeting";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:productId" element={<Products />} />
      <Route path="/greeting" element={<Greeting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
