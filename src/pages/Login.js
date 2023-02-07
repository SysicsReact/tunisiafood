
import { db,auth } from "../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  ref, set,onValue } from "firebase/database";
import { GoogleAuthProvider,signInWithEmailAndPassword,signInWithPopup} from "firebase/auth";
import {  ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    var testUser;

    const logInWithEmailAndPassword = async (email, password) => {
       console.log(email,password)
          await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            toast.success("Connecté avec succès")
            //navigate("/")
                })
                .catch((error) => {
                    toast.error("error.message")
                });
        
      };
      

const loginUser = (e) => {
    e.preventDefault()
    logInWithEmailAndPassword(email, password)
    
};
    const signInWithGoogle = async () => {

        try {
          const res = await signInWithPopup(auth, googleProvider);
          
            // updateStarCount(postElement, data);
        
        } catch (err) {
          console.error(err);
        }
      };

    useEffect(() => {
       if(user)navigate("/")
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
            <ToastContainer /> 
                <br></br><br></br><br></br><br></br><br></br>
                <section className="user-form-part">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
                                <div className="user-form-logo">
                                  
                                </div>
                                <div className="user-form-card">
                                    <div className="user-form-title">
                                        <h2>welcome!</h2>
                                        <p>Use your credentials to access</p>
                                    </div>
                                    <div className="user-form-group">
                                        <ul className="user-form-social">
                                            <li><i className="fab fa-facebook-f"></i> Login with facebook</li>
                                            <li><i className="fab fa-twitter"></i> Login with twitter</li>
                                            <li><i className="fab fa-google"></i> <button onClick={signInWithGoogle} >Login with Google</button></li>
                                            <li><i className="fab fa-instagram"></i> Login with instagram</li>
                                        </ul>
                                        <div className="user-form-divider">
                                            <p>or</p>
                                        </div>
                                        <form className="user-form"  onSubmit={loginUser}>
                                            <div className="form-group">
                                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                                            </div>
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" type="checkbox" value="" id="check" />
                                                <label className="form-check-label" for="check">Remember Me</label>
                                            </div>
                                            <div className="form-button">
                                                <button type="submit"> login</button>
                                                <p>Forgot your password?<a ><Link to="/Reset"> reset </Link></a></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="user-form-remind">
                                    <p>Don't have any account?<a><Link to="/Register"> Register here </Link></a></p>
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

export default Login;