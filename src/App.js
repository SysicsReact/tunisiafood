import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/register";
import Reset from "./pages/resetPwd";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import MyProfile from "./pages/MyProfile";
import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { Component } from 'react'
import $ from"jquery";
 import { jQuerycode } from "./components/Jq.js";

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

    </Routes>
    <div>
      <Footer/>
    </div>

    
    </>
    );
 }
   
}

export default App;
