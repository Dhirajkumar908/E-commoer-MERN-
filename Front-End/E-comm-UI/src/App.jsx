import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./app.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Layout from "./Pages/Layout";

import Home from "./Pages/Home";
import Loginuser from "./Pages/login";
import AboutUs from "./Pages/about";
import Contact from "./Pages/Contact";
import RagistarUser from "./Pages/ragistarUser";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import Checkout from "./Pages/CheckOut";
import FetchOrders from "./Pages/Orders";
import AdminDashbord from "./Pages/AdminDashbord";

import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Loginuser />} />
          <Route path="/signup" element={<RagistarUser />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order/history" element={<FetchOrders />} />
          <Route path="/Admin/Dashbord" element={
            <AdminRoute> <AdminDashbord /> </AdminRoute>
           
            }/>
        </Route>
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={3000}      // in ms
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      
    </>
  );
}

export default App;
