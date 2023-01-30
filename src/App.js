import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/register";
import Reset from "./pages/resetPwd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import About from "./pages/About";
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

    </Routes>
    <div>
      <Footer/>
    </div>

    
    </>
    );
 }
   
}

export default App;
