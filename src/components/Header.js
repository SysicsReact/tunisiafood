import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth, db, logout, changeIsLoading,changeIsTesting,testLoading } from "../firebase.config";
import $ from "jquery";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_USER,Remove_ACTIVE_USER } from "../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogOut } from "./hiddenLink";
import { async } from "q";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import Loader from "../components/loader/Loader";
import Cart from "./Cart";


const Dashboard=()=> {
  
    const [user] = useAuthState(auth);
    const[displayName,setDisplayName]=useState("");
    const dispatch=useDispatch();
    const [isLoading, setIsLoading ] = useState(true);
    const[test, setTest]=useState(true)
    const [completeLoading,setCompleLoading]=useState(false)
    const [isLoggedIn,setIsloggin]=useState(false); 
    //monitor currently siggnin user
    useEffect(()=>{
       // setIsLoading(true);
    
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setIsloggin(true);
              if(uid){
                const docRef = doc(db, "users", uid);
                
                getDoc(docRef).then(docSnap => {
                    if (docSnap.exists()) {
                        setDisplayName(docSnap.data().userName)
                        setIsLoading(true);
                        changeIsLoading(true);
                        changeIsTesting(true);
                        setCompleLoading(testLoading())
                        localStorage.setItem("isCompleting",true);
                        //changeIsTesting(false);
                       
                    } else {
                        
                        const writeUserData= async(userId, name, email,docRef)=>{
                            const userRef = doc(db, "users", userId);
                            console.log(userRef)
                            await setDoc(docRef, {
                              userName: name,
                              email:email,
                          }).then(()=>{
                            setDisplayName(name)
                            setIsLoading(true);
                            changeIsLoading(true);
                            changeIsTesting(true);
                            setCompleLoading(testLoading())

                            //changeIsTesting(false);
                            
                          }).catch((error) => {
                            setIsLoading(false);
                            changeIsLoading(true);
                            changeIsTesting(true);
                            setCompleLoading(testLoading())
                           
                          });
                          }
                    }
                  }) 
                }
          
              
              //console.log(user.displayName)
              


              dispatch(SET_ACTIVE_USER({
                email: user.email,
                userName: user.displayName?user.displayName:displayName,
                userID: user.uid
              }))
              setIsloggin(true);
            } else {
              // User is signed out
              // ...
             
                setDisplayName("")
                dispatch(Remove_ACTIVE_USER());
                changeIsLoading(true);
                changeIsTesting(true);
                
                setCompleLoading(testLoading())
                setIsloggin(false);
            }
          });
          setCompleLoading(testLoading())
    },[dispatch,displayName,completeLoading])

    function loggedUser(user) {
        if (user) {
            return (
                <>

                <button className="dashboard__btn" onClick={logout}> 
                <Link to="/"> Logout </Link> </button>
                <span><Link to="MyProfile"> profile </Link></span>
                </>
            )
        } else {
            return (
                <span><Link to="/Login"> join </Link></span>
            )
        }
    }
    
    return (
        
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="name" content="Greeny" />
                <meta name="title" content="Greeny - eCommerce HTML Template" />
                <title>Classic Home - Greeny</title>
                <link rel="icon" href="assets/images/favicon.png" />
                <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
                <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
                <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
                <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
                <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css" />
                <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
                <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/main.css" />
                <link rel="stylesheet" href="assets/css/home-classic.css" />
            </head>
            {(!completeLoading) &&<Loader/>}
           
            <header className="header-part">
                
                <div className="container">
                    <div className="header-content">
                        <div className="header-media-group">
                            <button className="header-user"> <img src="assets/images/user.png" alt="user" /> </button>
                            <a className="header-logo">
                            <Link to="/">
                                <img src="assets/images/Logo.png" alt="logo" />
                            </Link>
                        </a>
                            <button className="header-src"><i className="fas fa-search"></i></button>
                        </div>

                        <a className="header-logo">
                            <Link to="/">
                                <img src="assets/images/Logo.png" alt="logo" />
                            </Link>
                        </a>


                        <form className="header-form">
                            <input type="text" placeholder="Cherchez..." />
                            <button><i className="fas fa-search"></i></button>
                        </form>

                        <div className="header-widget-group">
                            <a href="front/compare.html" className="header-widget" title="Compare List">
                                <i className="fas fa-random"></i>
                                <sup>0</sup>
                            </a>
                            <a href="wishlist.html" className="header-widget" title="Wishlist">
                                <i className="fas fa-heart"></i>
                                <sup>0</sup>
                            </a>
                            <button className="header-widget header-cart" title="Cartlist">
                                <i className="fas fa-shopping-basket"></i>
                                <sup>9+</sup>
                                <span>total price<small>$345.00</small></span>
                                <span><small></small></span>
                            </button>
                        </div>
<li className="header-widget" title="My Account">
<img src="assets/images/user.png" alt="user" />
{isLoggedIn &&
<span className="navbar-item dropdown" >  
<NavLink to="/MyProfile" className="My-link" >{displayName} </NavLink>
            <ul className="dropdown-position-list">
                <li><Link to="MyProfile"> profile </Link></li>
                <li><button className="dashboard__btn"
                    onClick={logout}> 
                <Link to="/"> Logout </Link> </button></li>
            </ul>
            </span>
        }
<div>
    {!isLoggedIn&&
                <span><Link to="/Login"> join </Link></span>
            }
</div>
</li>
                    </div>
                </div>
              
            </header>
            <Cart/>

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
        </html>
    );

}


export default Dashboard;