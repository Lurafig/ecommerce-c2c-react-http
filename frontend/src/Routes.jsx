import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Products from "./pages/Product/Product";
import Post from "./pages/Post/Post";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

function HomePageRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, [navigate]);
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePageRedirect />}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="/products/:productID" element={<Products />} />
      <Route path="/post" element={<Post />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
