import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Greeting from "./pages/Greeting";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/products/:productId" element={<Products />} />
      <Route path="/greeting" element={<Greeting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
