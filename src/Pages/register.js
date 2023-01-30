import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {  useNavigate } from "react-router-dom";
import {  ref, set } from "firebase/database";
import {  db } from "../firebase.config";

import {
  auth,
  createUserWithEmailAndPassword,
  
} from "../firebase.config";
var isvalidate=false;
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  
  const register = async (name,email,password) => {
   
   createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    writeUserData(auth.currentUser.uid,name,auth.currentUser.email);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });     

  };
  function writeUserData(userId, name, email) {
    
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
    });
    /*get(child(db, `users/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot)
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });*/
  }

useEffect(() => {
    
    if (user) navigate("/Profile");
  }, [user, loading]);
  

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
            <section className="user-form-part">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
                            <div className="user-form-logo">
                                <img src="assets/images/logo.png" alt="logo" />
                            </div>
                            <div className="user-form-card">
                                <div className="user-form-title">
                                    <h2>welcome!</h2>
                                    <p>Use your credentials to access</p>
                                </div>
                                <div className="user-form-group">
                                   
                                    <div className="user-form-divider">
                                        <p>or</p>
                                    </div>
                                    <form className="user-form"  onSubmit={(event) => event.preventDefault()}>
                                    <div className="form-group">
                                            <input type="text" className="form-control" value={name}  onChange={(e) => setName(e.target.value)} placeholder="Full name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control"  value={email}  onChange={(e) => setEmail(e.target.value)}    placeholder="E-mail Address" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"  value={password}  onChange={(e) => setPassword(e.target.value)}   placeholder="Password" />
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" value="" id="check" />
                                            <label className="form-check-label" for="check">Remember Me</label>
                                        </div>
                                        <div className="form-button">
                                            <button type="" onClick={() => register(name,email,password)}>Register</button>
                                            <p>Forgot your password?<a >reset here</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="user-form-remind">
                            </div>
                            <div className="user-form-footer">
                                <p>TunisianFood | &COPY; Copyright by TunisianFood</p>
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