import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/register";
import Reset from "./pages/resetPwd";
import Header from "./components/Header";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Profile from "./pages/Profile";

import SingleProduct from "./pages/SingleProduct";
import Politics from "./pages/Politics";
import About from "./pages/About";
import { ToastContainer, toast } from 'react-toastify';
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import BlogDetails from "./pages/BlogDetails";
import ProductItem from "./components/product/ProductItems";
import CartDetails from "./pages/CartDetails";
import AllProducts from "./pages/AllProducts";
import MyProfile from "./pages/MyProfile";
import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { Component, useState } from 'react'
import { jQuerycode } from "./components/Jq.js";
import Loader from "./components/loader/Loader";
import ShopProduct from "./components/product/ShopProduct";
import Contact from "./pages/Contact";
import OrderHistory from "./pages/OrderHistory";
import OrderDetails from "./pages/OrderDetails";
import WishDetails from "./pages/WishDetails";
import Faq from "./pages/Faq";
import Cgv from "./pages/Cgv";
let test = false;
class App extends Component {

  componentDidMount() {
    jQuerycode();
  }


  render() {

    if(!localStorage.getItem("isCompleting")){
      localStorage.setItem("isCompleting",true)
    }
    test = localStorage.getItem("isCompleting");
    window.scrollTo(0, 0);
    return (
      <>
      <ToastContainer />
        {!test && <Loader />}
        <div>
          <Header />
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/About" element={<About />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/Cart" elemnt={<Cart />} />
          <Route path="/ShopProduct" element={<ShopProduct />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CartDetails" element={<CartDetails />} />
          <Route path="/ProductItems" element={<ProductItem/>} />
          <Route path="/SingleProduct/:id" element={<SingleProduct/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/OrderHistory" element={<OrderHistory/>} />
          <Route path="/OrderDetails" element={<OrderDetails/>} />
          <Route path="/BlogDetails" element={<BlogDetails/>} />
          <Route path="/WishDetails" element={<WishDetails/>} />
          <Route path="/Politics" element={<Politics/>} />
          <Route path="/Cgv" element={<Cgv/>} />
          <Route path="/Faq" element={<Faq/>} />
        </Routes>
        <div>
          <Footer />
        </div>


      </>
    );
  }

}

export default App;
