import React from 'react';
import ReactDOM  from 'react-dom';
import styles from "./Loader.css";


const Loader = () => {
  return ReactDOM.createPortal (
    
    <div style={{ position: "fixed",
     width: "100vw",
     height: "100vh",
     backgroundColor: "rgb(244 245 244)",
     zIndex: "9",}} >
     <div style={{ position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "999"}}>
      
          <img src="assets/images/load1.gif" alt="Loading..." style={{ width: "100%",
     height: "80%"}}/>
         
     </div>
    </div>,
    document.getElementById("loader")
  );
}

export default Loader