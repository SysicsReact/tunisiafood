import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Register from "./Pages/register";
import Reset from "./Pages/resetPwd";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Shop from "./Pages/Shop";
import AllProducts from "./Pages/AllProducts";
import SingleProduct from "./Pages/SingleProduct";
import MyProfile from "./Pages/MyProfile";
import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { Component } from 'react'
import $ from"jquery";
 import { jQuerycode } from "./components/Jq.js";
 let test=false;
 class  App extends Component {
  componentDidMount()
  {
   
      jQuerycode();
      
  }
  
 
 render(){

  return(
    <>
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

    </Routes>
    <div>
      <Footer/>
    </div>

    
    </>
    );
 }
   
}

export default App;
