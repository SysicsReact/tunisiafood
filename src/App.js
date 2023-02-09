import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/register";
import Reset from "./pages/resetPwd";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";
import MyProfile from "./pages/MyProfile";
import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { Component, useState } from 'react'
import $ from"jquery";
 import { jQuerycode } from "./components/Jq.js";
 import Loader from "./components/loader/Loader";
import Product from "./components/Product";
import ShopProduct from "./components/product/ShopProduct";
import Contact from "./pages/Contact";
 let test=false;
 class  App extends Component {
  componentDidMount()
  {
      jQuerycode();   
  }
  
 render(){
  test=localStorage.getItem("isCompleting");
  return(
    <>
    {!test&&<Loader/>}
    <div>
        <Header/>
        <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Reset" element={<Reset/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/MyProfile" element={<MyProfile/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/SingleProduct" element={<SingleProduct/>}/>
      <Route path="/AllProducts" element={<AllProducts/>}/>
      <Route path="/Cart" elemnt={<Cart/>}/>
      <Route path="/ShopProduct" element={<ShopProduct/>}/>
      <Route path="/Contact" element={<Contact/>}/>

    </Routes>
    <div>
      <Footer/>
    </div>

    
    </>
    );
 }
   
}

export default App;
