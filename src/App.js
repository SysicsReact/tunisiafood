import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Register from "./Pages/register";
import Reset from "./Pages/resetPwd";
import Header from "./components/Header";
import Profile from "./Pages/Profile";
import MyProfile from "./Pages/MyProfile";

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
    
    </>
    );
}

export default App;
