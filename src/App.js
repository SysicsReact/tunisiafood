import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/register";
import Reset from "./pages/resetPwd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import MyProfile from "./pages/MyProfile";

import './App.css';
import { Route, Routes } from "react-router-dom";
function App (){

  

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
      <Route path="/MyProfile" element={<MyProfile/>}/>

    </Routes>
    <div>
      <Footer/>
    </div>

    
    </>
    );
}

export default App;
