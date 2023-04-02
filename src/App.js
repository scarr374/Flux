import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Products from "./pages/Products";
import Collections from "./pages/Collections";
import Closet from "./pages/Closet";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Collection from "./pages/Collection";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/closet" element={<Closet />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="collection/:id" element={<Collection />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
