import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";

import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
// import Login from "../pages/Login";
import Admin from '../pages/Admin'
import CreateContainer from "../pages/CreateContainer";
import ProductDesc from "../pages/ProductDesc";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/createItem" element={<CreateContainer />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
};

export default Routers;
