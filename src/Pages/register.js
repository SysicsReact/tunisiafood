import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {  Link, useNavigate } from "react-router-dom";
import {  ref, set } from "firebase/database";
import {  db } from "../firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/loader/Loader";
import {auth, createUserWithEmailAndPassword,} from "../firebase.config";
import { doc, setDoc } from "@firebase/firestore";
var isvalidate=false;


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [isLoading, setIsLoading ] = useState(false);
  

  const resgisterUser = (e) => {
    e.preventDefault();
    setIsLoading(true)
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
    const user = userCredential.user;
    toast.success("inscrit avec succès");
    writeUserData(auth.currentUser.uid,name,auth.currentUser.email);
    
  })
  .catch((error) => {
    toast.error("Quelque chose s'est mal passé");
    setIsLoading(false)
  });   
}
const writeUserData= async(userId, name, email)=>{

    const userRef = doc(db, "users", userId);
    
    await setDoc(userRef, {
      userName: name,
      email:email,
  }).then(()=>{
    toast.success("vos donnessera engistre");
    navigate("/")
    setIsLoading(false)
  }).catch((error) => {
    setIsLoading(false)
    toast.error(error.message);
    // Handle Errors here.
    // ...
  });
  }


  const register = async (name,email,password) => {
   
   
  };

  return (
    <html lang="en">
        <head>
           
            <link rel="icon" href="assets/images/favicon.png" />
            <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
            <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
            <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
            <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
            <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css" />
            <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
            <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
            <link rel="stylesheet" href="assets/css/main.css" />
            <link rel="stylesheet" href="assets/css/user-auth.css" />
        </head>
        <body>
        <ToastContainer /> 
        {isLoading && <Loader/>}
            <section className="user-form-part">
                <div className="container">
                    <div className="row justify-content-center">
                        <br></br>  <br></br>  <br></br>  <br></br>
                        <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
                            <div className="user-form-logo">
                                <img src="" alt="logo" />
                            </div>
                            <div className="user-form-card">
                                <div className="user-form-title">
                                    <h2>bienvenu!</h2>
                                    <p>Entrez vos identifiants pour vous inscrire</p>
                                </div>
                                <div className="user-form-group">
                                    <form className="user-form"  onSubmit={resgisterUser}>
                                    <div className="form-group">
                                            <input type="text" className="form-control" 
                                            value={name}  onChange={(e) => setName(e.target.value)} required placeholder="Votre nom" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control"  
                                            value={email}  onChange={(e) => setEmail(e.target.value)}  required  placeholder="Votre Adresse E-mail" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"  
                                            value={password}  onChange={(e) => setPassword(e.target.value)} required  placeholder="Mot de pass" />
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" value="" id="check" />
                                            <label className="form-check-label" for="check">Remember Me</label>
                                        </div>
                                        <div className="form-button">
                                            <button type="submit" >S'inscrire</button>
                                            <p>Mot de pass oublié?<a >Réinitialiser ici</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="user-form-remind">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <script src="assets/vendor/bootstrap/jquery-1.12.4.min.js"></script>
            <script src="assets/vendor/bootstrap/popper.min.js"></script>
            <script src="assets/vendor/bootstrap/bootstrap.min.js"></script>
            <script src="assets/vendor/countdown/countdown.min.js"></script>
            <script src="assets/vendor/niceselect/nice-select.min.js"></script>
            <script src="assets/vendor/slickslider/slick.min.js"></script>
            <script src="assets/vendor/venobox/venobox.min.js"></script>
            <script src="assets/js/nice-select.js"></script>
            <script src="assets/js/countdown.js"></script>
            <script src="assets/js/accordion.js"></script>
            <script src="assets/js/venobox.js"></script>
            <script src="assets/js/slick.js"></script>
            <script src="assets/js/main.js"></script>
        </body>
    </html>
);

}

export default Register;