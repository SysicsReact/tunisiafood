import Index from "./pages/Index";
import Login from "./pages/Login";
import Header from "./components/Header";
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
    </Routes>
    </>
    );
}

export default App;
